import Image from "next/image";

const productLinks = [
  {
    href: "https://www.onpoint.vn/vi/product-opollo/",
    label: "Opollo - Hệ thống Quản lý đơn hàng đa kênh (Omni-channel)",
  },
  {
    href: "https://www.onpoint.vn/vi/octopos-ung-dung-quan-ly-don-hang-o2o/",
    label: "OctoPOS - Ứng dụng quản lý đơn hàng O2O (Online-to-Offline)",
  },
  {
    href: "https://www.onpoint.vn/vi/he-thong-bao-cao-hoat-dong-kinh-doanh/",
    label: "Hệ thống báo cáo hoạt động kinh doanh",
  },
];

const serviceLinks = [
  {
    href: "https://www.onpoint.vn/vi/quan-ly-marketing-truc-tuyen/",
    label: "Quản lý marketing trực tuyến",
  },
  {
    href: "https://www.onpoint.vn/vi/quan-ly-gian-hang-truc-tuyen/",
    label: "Quản lý gian hàng trực tuyến",
  },
  {
    href: "https://www.onpoint.vn/vi/cham-soc-khach-hang/",
    label: "Chăm sóc khách hàng",
  },
  {
    href: "https://www.onpoint.vn/vi/quan-ly-chuoi-cung-ung-da-kenh/",
    label: "Quản lý chuỗi cung ứng đa kênh",
  },
  {
    href: "https://www.onpoint.vn/vi/livestream/",
    label: "Livestream từ A đến Z",
  },
];

const usefulLinks = [
  {
    href: "https://www.onpoint.vn/vi/chinh-sach-quyen-rieng-tu/",
    label: "Chính sách Quyền riêng tư",
  },
  {
    href: "https://www.onpoint.vn/vi/dieu-khoan-dich-vu/",
    label: "Điều khoản Dịch vụ",
  },
];

function FacebookIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="h-[22px] w-[22px]"
      aria-hidden="true"
      fill="currentColor"
    >
      <path d="M13.5 21v-7h2.3l.4-2.7h-2.7V9.6c0-.8.3-1.4 1.5-1.4h1.3V5.8c-.2 0-1-.1-2-.1-2 0-3.4 1.2-3.4 3.5v2H8.7V14H11v7h2.5z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="h-[22px] w-[22px]"
      aria-hidden="true"
      fill="currentColor"
    >
      <path d="M6.4 8.6a1.6 1.6 0 110-3.2 1.6 1.6 0 010 3.2zM5 10h2.8v9H5v-9zm4.4 0H12v1.2h.1c.4-.8 1.4-1.6 2.8-1.6 3 0 3.6 2 3.6 4.5V19h-2.8v-4.2c0-1 0-2.3-1.4-2.3s-1.6 1.1-1.6 2.2V19H9.4v-9z" />
    </svg>
  );
}

function LinkColumn({ title, links }: { title: string; links: Array<{ href: string; label: string }> }) {
  return (
    <div className="w-full max-[768px]:basis-full min-[769px]:max-[1200px]:mb-6 min-[769px]:max-[1200px]:basis-[calc(50%-12px)] min-[1201px]:basis-[calc(25%-12px)]">
      <h3 className="mb-[13px] text-[18px] font-medium leading-6">{title}</h3>
      <ul>
        {links.map((link) => (
          <li key={link.href} className="py-[4.5px] text-[14px] font-light leading-[26px]">
            <a href={link.href} className="text-white transition-all duration-[300ms] hover:text-[#b91c1c]">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function FooterSection() {
  return (
    <footer className="w-full bg-[#1d1d1d] pb-16 pt-16 text-white lg:pb-[85px] lg:pt-[100px]">
      <div className="mx-auto flex w-full flex-wrap justify-between max-[1200px]:px-[15px] gap-4 min-[1201px]:w-[80%] min-[1201px]:max-w-[1920px]">
        <div className="w-full max-[768px]:basis-full min-[769px]:max-[1200px]:mb-6 min-[769px]:max-[1200px]:basis-[calc(50%-12px)] min-[1201px]:basis-[calc(25%-12px)]">
          <div className="mb-[31px]">
            <Image
              src="/assets/footer/onpoint-logo.svg"
              alt="OnPoint"
              width={168}
              height={38}
              className="h-[38px] w-auto max-w-[168px] object-contain"
            />
          </div>

          <div className="mb-4 flex text-[14px] font-light leading-[26px]">
            27B Nguyễn Đình Chiểu, Phường Đa Kao, Quận 1, Thành Phố Hồ Chí Minh
          </div>

          <div className="mb-4 flex items-start text-[14px] font-light leading-[26px]">
            <Image
              src="/assets/footer/phone.png"
              alt=""
              width={18}
              height={18}
              className="mt-0.5 mr-[7px] h-[18px] w-[18px] shrink-0"
              aria-hidden="true"
            />
            <a href="tel:+842873099697" className="text-white transition-all duration-[300ms] hover:text-[#b91c1c]">
              (+84) 028 73099697
            </a>
          </div>

          <div className="mb-4 flex items-start text-[14px] font-light leading-[26px]">
            <Image
              src="/assets/footer/contact.png"
              alt=""
              width={18}
              height={18}
              className="mt-0.5 mr-[7px] h-[18px] w-[18px] shrink-0"
              aria-hidden="true"
            />
            <div>
              <div>
                <a href="mailto:contact@onpoint.vn" className="text-white transition-all duration-[300ms] hover:text-[#b91c1c]">
                  contact@onpoint.vn
                </a>
              </div>
              <div>
                <a href="mailto:sales@onpoint.vn" className="text-white transition-all duration-[300ms] hover:text-[#b91c1c]">
                  sales@onpoint.vn
                </a>
              </div>
            </div>
          </div>
        </div>

        <LinkColumn title="Sản phẩm" links={productLinks} />
        <LinkColumn title="Dịch vụ" links={serviceLinks} />

        <div className="w-full max-[768px]:basis-full min-[769px]:max-[1200px]:mb-6 min-[769px]:max-[1200px]:basis-[calc(50%-12px)] min-[1201px]:basis-[calc(25%-12px)]">
          <h3 className="mb-[13px] text-[18px] font-medium leading-6">Liên kết hữu ích</h3>
          <ul>
            {usefulLinks.map((link) => (
              <li key={link.href} className="py-[4.5px] text-[14px] font-light leading-[26px]">
                <a href={link.href} className="text-white transition-all duration-[300ms] hover:text-[#b91c1c]">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-[15px] flex items-center gap-4">
            <a
              href="https://www.facebook.com/OnpointVietnam"
              target="_blank"
              rel="noreferrer"
              aria-label="OnPoint Facebook"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#b91c1c] bg-[#b91c1c] text-white transition-transform hover:scale-105"
            >
              <FacebookIcon />
            </a>
            <a
              href="https://www.linkedin.com/company/onpointvn/"
              target="_blank"
              rel="noreferrer"
              aria-label="OnPoint LinkedIn"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#b91c1c] bg-[#b91c1c] text-white transition-transform hover:scale-105"
            >
              <LinkedinIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
