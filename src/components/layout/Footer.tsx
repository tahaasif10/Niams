import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa6";

const SERVICES = [
  { label: "Course Batches", href: "/courses" },
  { label: "Test Series", href: "/test-series" },
  { label: "Study Material", href: "/study-material" },
  { label: "Results", href: "/results" },
];

const COMPANY = [
  { label: "About Us", href: "/about" },
  { label: "Our Faculty", href: "/faculty" },
  { label: "Success Stories", href: "/success-stories" },
  { label: "Careers", href: "/careers" },
];

const SOCIALS = [
  { icon: FaFacebookF, href: "#", label: "Facebook" },
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaXTwitter, href: "#", label: "Twitter" },
  { icon: FaYoutube, href: "#", label: "YouTube" },
  { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="bg-[#fafafa] text-gray-600 border-t border-gray-200">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="text-xl font-bold text-gray-900">NIAMS</h2>
            <p className="mt-2 text-sm text-gray-500">
              Helping students achieve exam success since day one.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-900">
              Services
            </h3>
            <ul className="mt-4 space-y-2">
              {SERVICES.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-500 hover:text-[#0B1D3A]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-900">
              Company
            </h3>
            <ul className="mt-4 space-y-2">
              {COMPANY.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-500 hover:text-[#0B1D3A]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-900">
              Contact Us
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-500">
              <li>Call: +92 300 1234567</li>
              <li>Email: info@brandname.com</li>
              <li>
                Address: D - 66/1 Block H Allama Rasheed Turrabi Road North
                Nazimabad Karachi
              </li>
            </ul>
          </div>
        </div>

        {/* Social + Follow Us */}
        <div className="mt-10 flex flex-col items-center gap-4 border-t border-gray-200 pt-6 md:flex-row md:justify-between">
          <p className="text-sm text-gray-500">Follow Us</p>
          <div className="flex gap-4">
            {SOCIALS.map(({ icon: Icon, href, label }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                className="text-gray-500 hover:text-[#0B1D3A]"
              >
                <Icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-4 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} NIAMS. All rights reserved.
        </div>
      </div>
    </footer>
  );
}