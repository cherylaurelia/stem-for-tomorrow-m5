"use client"

import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Users, Globe } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function AboutPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{t("about.title")}</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-stem-blue to-stem-yellow mx-auto"></div>
        </div>

        {/* Mission Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{t("about.mission.title")}</h2>
              <p className="text-lg text-gray-600 leading-relaxed">{t("about.mission.text")}</p>
            </div>
            <div className="bg-gradient-to-br from-stem-blue to-stem-yellow rounded-lg p-8 text-white">
              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Empowering Through Education</h3>
                <p>Making STEM accessible and engaging for all</p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 bg-gradient-to-br from-stem-yellow to-stem-blue rounded-lg p-8 text-white">
              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Inspiring Innovation</h3>
                <p>Guiding minds through the journey of STEM</p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{t("about.vision.title")}</h2>
              <p className="text-lg text-gray-600 leading-relaxed">{t("about.vision.text")}</p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">{t("about.values.title")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <BookOpen className="w-12 h-12 text-stem-blue mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{t("about.values.education")}</h3>
                <p className="text-gray-600">{t("about.values.education.text")}</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Users className="w-12 h-12 text-stem-yellow mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{t("about.values.accessibility")}</h3>
                <p className="text-gray-600">{t("about.values.accessibility.text")}</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Globe className="w-12 h-12 text-stem-blue mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{t("about.values.community")}</h3>
                <p className="text-gray-600">{t("about.values.community.text")}</p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}
