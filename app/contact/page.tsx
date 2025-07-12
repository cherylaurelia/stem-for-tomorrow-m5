"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Mail, Instagram, MessageCircle } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function ContactPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{t("contact.title")}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">{t("contact.subtitle")}</p>
          <div className="w-24 h-1 bg-gradient-to-r from-stem-blue to-stem-yellow mx-auto"></div>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Email */}
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-stem-blue to-stem-yellow rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t("contact.email")}</h3>
              <a
                href="mailto:stemfortomorrow.org@gmail.com"
                className="text-stem-blue hover:text-stem-blue/80 font-medium"
              >
                stemfortomorrow.org@gmail.com
              </a>
            </CardContent>
          </Card>

          {/* Social Media */}
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-stem-yellow to-stem-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <Instagram className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t("contact.social")}</h3>
              <a
                href="https://instagram.com/stemfortomorrow_"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stem-blue hover:text-stem-blue/80 font-medium"
              >
                @stemfortomorrow_
              </a>
            </CardContent>
          </Card>

          {/* Partnership */}
          <Card className="text-center hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-stem-blue to-stem-yellow rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t("contact.partnership")}</h3>
              <p className="text-gray-600 text-sm">{t("contact.partnership.text")}</p>
            </CardContent>
          </Card>
        </div>

        {/* Additional Info */}
        <section className="bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Let's Work Together</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Whether you're interested in partnering with us, volunteering your time, or simply learning more about our
            mission, we'd love to hear from you. Together, we can make quality STEM education accessible to all
            children.
          </p>
        </section>
      </div>
    </div>
  )
}
