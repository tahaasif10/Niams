import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          
          {/* Brand + copyright */}
          <div className="max-w-sm">
            <h2 className="font-kalam text-2xl text-white">NIAMS</h2>
            <p className="mt-1 text-xs text-white/80">
              National Institute of Arts & Management Sciences
            </p>
            <p className="mt-4 text-xs text-white/60">
              © {new Date().getFullYear()} NIAMS. All rights reserved.
            </p>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-2.5 text-sm text-white">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white/80 mb-1">
              Contact Us
            </h3>
            <div className="flex items-center gap-2">
              <Phone size={16} className="shrink-0 text-white" />
              <span className="font-medium">Call:</span>
              <a
                href="tel:+923009282794"
                className="hover:underline transition-colors"
              >
                +92 300 9282794
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} className="shrink-0 text-white" />
              <span className="font-medium">Email:</span>
              <a
                href="mailto:info@niams.pk"
                className="hover:underline transition-colors"
              >
                info@niams.pk
              </a>
            </div>
            <div className="flex items-start gap-2 max-w-md">
              <MapPin size={16} className="shrink-0 text-white mt-0.5" />
              <div>
                <span className="font-medium">Address:</span>{" "}
                <span>D - 66/1 Block H Allama Rasheed Turrabi Road North Nazimabad Karachi</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}