"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, Instagram, ExternalLink, ArrowRight } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function GetInvolvedPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{t("involved.title")}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">{t("involved.subtitle")}</p>
          <div className="w-24 h-1 bg-gradient-to-r from-stem-blue to-stem-yellow mx-auto"></div>
        </div>

        {/* Ways to Get Involved */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Donate */}
          <Card className="text-center hover:shadow-lg transition-shadow group">
            <CardContent className="p-8">
              <div className="w-20 h-20 bg-gradient-to-br from-stem-blue to-stem-yellow rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t("involved.donate.title")}</h3>
              <p className="text-gray-600 mb-6">{t("involved.donate.text")}</p>
              <div className="space-y-3">
                <Button asChild className="w-full bg-stem-blue hover:bg-stem-blue/90">
                  <Link href="/donate" className="flex items-center justify-center space-x-2">
                    <span>Learn More About Donating</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-stem-blue text-stem-blue hover:bg-stem-blue hover:text-white bg-transparent"
                >
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2"
                  >
                    <span>{t("involved.donate.cta")}</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Volunteer */}
          <Card className="text-center hover:shadow-lg transition-shadow group">
            <CardContent className="p-8">
              <div className="w-20 h-20 bg-gradient-to-br from-stem-yellow to-stem-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t("involved.volunteer.title")}</h3>
              <p className="text-gray-600 mb-6">{t("involved.volunteer.text")}</p>
              <div className="space-y-3">
                <Button asChild className="w-full bg-stem-yellow hover:bg-stem-yellow/90 text-gray-900">
                  <Link href="/volunteer" className="flex items-center justify-center space-x-2">
                    <span>Explore Volunteer Opportunities</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-stem-yellow text-stem-yellow hover:bg-stem-yellow hover:text-gray-900 bg-transparent"
                >
                  <a
                    href="https://forms.google.com/volunteer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2"
                  >
                    <span>{t("involved.volunteer.cta")}</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Follow Us Section */}
        <section className="mb-16">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-stem-blue to-stem-yellow rounded-full flex items-center justify-center mx-auto mb-6">
                <Instagram className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t("involved.follow.title")}</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">{t("involved.follow.text")}</p>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-stem-blue text-stem-blue hover:bg-stem-blue hover:text-white bg-transparent"
              >
                <a
                  href="https://instagram.com/stemfortomorrow_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <Instagram className="w-5 h-5" />
                  <span>{t("involved.follow.cta")}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-br from-stem-blue to-stem-yellow rounded-lg p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Every Action Counts</h2>
          <p className="text-xl mb-8 opacity-90">
            Whether you donate, volunteer, or simply follow our journey, you're helping us create a brighter future for
            children through STEM education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/donate" className="flex items-center space-x-2">
                <Heart className="w-5 h-5" />
                <span>Donate</span>
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-stem-blue bg-transparent"
              asChild
            >
              <Link href="/volunteer" className="flex items-center space-x-2">
                <Users className="w-5 h-5" />
                <span>Volunteer</span>
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
