"use client"

import Link from "next/link"
import { Instagram, Mail } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-stem-blue to-stem-yellow rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">ST</span>
              </div>
              <span className="font-bold text-xl text-gray-900">STEM for Tomorrow</span>
            </div>
            <p className="text-gray-600 text-sm">{t("footer.mission")}</p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/about" className="block text-gray-600 hover:text-stem-blue text-sm">
                {t("nav.about")}
              </Link>
              <Link href="/work" className="block text-gray-600 hover:text-stem-blue text-sm">
                {t("nav.work")}
              </Link>
              <Link href="/get-involved" className="block text-gray-600 hover:text-stem-blue text-sm">
                {t("nav.involved")}
              </Link>
              <Link href="/contact" className="block text-gray-600 hover:text-stem-blue text-sm">
                {t("nav.contact")}
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/stemfortomorrow_"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-stem-blue"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a href="mailto:stemfortomorrow.org@gmail.com" className="text-gray-600 hover:text-stem-blue">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} STEM for Tomorrow. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  )
}
