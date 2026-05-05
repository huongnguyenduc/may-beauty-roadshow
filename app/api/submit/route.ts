import { NextResponse } from "next/server";
import { google } from "googleapis";

const GROWTH_CHALLENGES = [
  "Tỷ lệ chuyển đổi thấp",
  "Chi phí Ads cao nhưng ROAS thấp",
  "Khó kết nối Livestream – Video – Affiliate",
  "KOC/KOL chưa hiệu quả",
  "Thiếu công cụ đo lường.",
] as const;

type Submission = {
  fullName: string;
  jobTitle: string;
  companyEmail: string;
  phone: string;
  growthChallenges?: string[];
  speakerQuestion?: string;
};

async function appendToSheet(row: string[]) {
  const privateKey = process.env.GOOGLE_PRIVATE_KEY;
  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const spreadsheetId = process.env.GOOGLE_SHEET_ID;
  const sheetRange = process.env.GOOGLE_SHEET_RANGE || "Sheet1!A:K";

  if (!privateKey || !clientEmail || !spreadsheetId) {
    throw new Error("Missing Google Sheets environment variables");
  }

  const auth = new google.auth.JWT({
    email: clientEmail,
    key: privateKey.replace(/\\n/g, "\n"),
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: sheetRange,
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [row],
    },
  });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const submission = body as Submission;

    const timestamp = new Date().toISOString();
    const challengeColumns = GROWTH_CHALLENGES.map((challenge) =>
      submission.growthChallenges?.includes(challenge) ? "TRUE" : "FALSE"
    );
    const row = [
      timestamp,
      submission.fullName || "",
      submission.jobTitle || "",
      submission.companyEmail || "",
      submission.phone || "",
      ...challengeColumns,
      submission.speakerQuestion || "",
    ];

    await appendToSheet(row);

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error("/api/submit error:", err?.message || err);
    return NextResponse.json({ ok: false, error: err?.message || String(err) }, { status: 500 });
  }
}
