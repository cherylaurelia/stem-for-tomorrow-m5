"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, DollarSign, Handshake, BookOpen, Target, Heart } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function HomePage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-stem-blue to-stem-yellow text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{t("home.hero.title")}</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-90">{t("home.hero.subtitle")}</p>
          <Link href="/get-involved">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              {t("home.hero.cta")}
            </Button>
          </Link>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">{t("home.impact.title")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-stem-blue mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{t("home.impact.followers")}</h3>
                <p className="text-gray-600">Engaging STEM content on Instagram</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <DollarSign className="w-12 h-12 text-stem-yellow mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{t("home.impact.raised")}</h3>
                <p className="text-gray-600">Supporting educational programs</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Handshake className="w-12 h-12 text-stem-blue mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{t("home.impact.partnership")}</h3>
                <p className="text-gray-600">Indonesian philanthropic organization</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{t("home.mission.title")}</h2>
              <p className="text-lg text-gray-600 mb-8">{t("home.mission.text")}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <BookOpen className="w-6 h-6 text-stem-blue mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Educational Content</h3>
                    <p className="text-gray-600 text-sm">Creating engaging STEM materials</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Target className="w-6 h-6 text-stem-yellow mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Direct Impact</h3>
                    <p className="text-gray-600 text-sm">Teaching children directly</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Heart className="w-6 h-6 text-stem-blue mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Community Focus</h3>
                    <p className="text-gray-600 text-sm">Supporting underprivileged children</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Handshake className="w-6 h-6 text-stem-yellow mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Partnerships</h3>
                    <p className="text-gray-600 text-sm">Collaborating for greater impact</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-stem-blue to-stem-yellow rounded-lg p-8 text-white">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Join Our Community</h3>
                <p className="mb-6">Follow us on Instagram for daily STEM content and updates on our impact.</p>
                <Button variant="secondary" size="lg" asChild>
                  <a href="https://instagram.com/stemfortomorrow_" target="_blank" rel="noopener noreferrer">
                    Follow Us on Instagram
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
