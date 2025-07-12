"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Instagram, GraduationCap, DollarSign } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function WorkPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{t("work.title")}</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-stem-blue to-stem-yellow mx-auto"></div>
        </div>

        {/* Work Areas */}
        <div className="space-y-16">
          {/* Content Creation */}
          <section>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">{t("work.content.title")}</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">{t("work.content.text")}</p>
                <Card className="bg-gradient-to-br from-stem-blue to-stem-yellow text-white">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <Instagram className="w-8 h-8" />
                      <div>
                        <h3 className="font-bold text-lg">1,000+ Followers</h3>
                        <p className="opacity-90">Growing STEM community</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="bg-gray-50 rounded-lg p-8">
                <div className="text-center">
                  <Instagram className="w-16 h-16 text-stem-blue mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Social Media Impact</h3>
                  <p className="text-gray-600">
                    Engaging content that makes STEM accessible and fun for young learners across Indonesia.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Teaching Support */}
          <section>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 bg-gray-50 rounded-lg p-8">
                <div className="text-center">
                  <GraduationCap className="w-16 h-16 text-stem-yellow mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Direct Teaching</h3>
                  <p className="text-gray-600">
                    One-on-one and group sessions providing personalized math and English instruction.
                  </p>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">{t("work.teaching.title")}</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">{t("work.teaching.text")}</p>
                <Card className="bg-gradient-to-br from-stem-yellow to-stem-blue text-white">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <GraduationCap className="w-8 h-8" />
                      <div>
                        <h3 className="font-bold text-lg">Partnership with Payon Citi</h3>
                        <p className="opacity-90">Reaching children across Indonesia</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Fundraising */}
          <section>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">{t("work.fundraising.title")}</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">{t("work.fundraising.text")}</p>
                <Card className="bg-gradient-to-br from-stem-blue to-stem-yellow text-white">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <DollarSign className="w-8 h-8" />
                      <div>
                        <h3 className="font-bold text-lg">1M+ IDR Raised</h3>
                        <p className="opacity-90">Supporting educational programs</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="bg-gray-50 rounded-lg p-8">
                <div className="text-center">
                  <DollarSign className="w-16 h-16 text-stem-blue mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Community Support</h3>
                  <p className="text-gray-600">
                    Generous donations from our community enable us to expand our reach and impact more children's
                    lives.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
