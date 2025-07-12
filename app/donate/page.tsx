"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Shield, Users, CreditCard, Smartphone } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function DonatePage() {
  const { t } = useLanguage()

  const handleDonateClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    alert("Donations are coming soon! Please check back later.")
  }

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{t("donate.title")}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">{t("donate.subtitle")}</p>
          <div className="w-24 h-1 bg-gradient-to-r from-stem-blue to-stem-yellow mx-auto"></div>
        </div>

        {/* Donation Options */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Choose Your Payment Method</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* PayPal - International */}
            <Card className="text-center hover:shadow-lg transition-shadow border-2 hover:border-stem-blue">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-stem-blue rounded-full flex items-center justify-center mx-auto mb-6">
                  <CreditCard className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">PayPal</h3>
                <p className="text-gray-600 mb-6">For international donors</p>
                <Button className="w-full bg-stem-blue hover:bg-stem-blue/90" onClick={handleDonateClick} disabled>
                  Donate via PayPal (Coming Soon)
                </Button>
              </CardContent>
            </Card>

            {/* GoPay - Indonesian */}
            <Card className="text-center hover:shadow-lg transition-shadow border-2 hover:border-stem-yellow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-stem-yellow rounded-full flex items-center justify-center mx-auto mb-6">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">GoPay</h3>
                <p className="text-gray-600 mb-6">Untuk donatur Indonesia</p>
                <Button
                  className="w-full bg-stem-yellow hover:bg-stem-yellow/90 text-gray-900"
                  onClick={handleDonateClick}
                  disabled
                >
                  Donasi via GoPay (Segera Hadir)
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Why Donate */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">{t("donate.why.title")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-8">
                <Heart className="w-12 h-12 text-stem-blue mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{t("donate.why.direct")}</h3>
                <p className="text-gray-600">{t("donate.why.direct.desc")}</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-8">
                <Shield className="w-12 h-12 text-stem-yellow mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{t("donate.why.transparent")}</h3>
                <p className="text-gray-600">{t("donate.why.transparent.desc")}</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-8">
                <Users className="w-12 h-12 text-stem-blue mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{t("donate.why.partnership")}</h3>
                <p className="text-gray-600">{t("donate.why.partnership.desc")}</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Donation CTA */}
        <section className="bg-gradient-to-br from-stem-blue to-stem-yellow rounded-lg p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Make an Impact?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join our community of supporters and help us provide quality STEM education to children who need it most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" onClick={handleDonateClick} disabled className="text-lg px-8 py-3">
              <CreditCard className="w-5 h-5 mr-2" />
              PayPal (Coming Soon)
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-stem-blue bg-transparent text-lg px-8 py-3"
              onClick={handleDonateClick}
              disabled
            >
              <Smartphone className="w-5 h-5 mr-2" />
              GoPay (Segera Hadir)
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
