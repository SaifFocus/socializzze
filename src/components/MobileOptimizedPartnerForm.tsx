
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";

const MobileOptimizedPartnerForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    restaurantName: '',
    contactPerson: '',
    email: '',
    phone: '',
    location: '',
    bookingSystem: '',
    additional: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.restaurantName || !formData.contactPerson || !formData.email || !formData.phone || !formData.location) {
      toast({
        title: "Formuläret är inte komplett",
        description: "Vänligen fyll i alla obligatoriska fält.",
        variant: "destructive",
      });
      return;
    }

    console.log('Partner form submitted:', formData);
    
    toast({
      title: "Tack för din intresseanmälan!",
      description: "Vi hör av oss inom 1 arbetsdag.",
    });

    // Reset form
    setFormData({
      restaurantName: '',
      contactPerson: '',
      email: '',
      phone: '',
      location: '',
      bookingSystem: '',
      additional: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-4 sm:px-6">
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent leading-tight">
          Vill du bli en av våra första partnerrestauranger?
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 px-2">
          Fyll i uppgifterna nedan, så kontaktar vi dig för att boka ett introduktionsmöte.
        </p>
      </div>

      <Card className="p-6 sm:p-8 bg-white/80 backdrop-blur-sm border-rose-100 shadow-xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-3">
            <Label htmlFor="restaurantName" className="text-rose-700 font-medium text-base">
              Restaurangens namn *
            </Label>
            <Input
              id="restaurantName"
              type="text"
              value={formData.restaurantName}
              onChange={(e) => handleInputChange('restaurantName', e.target.value)}
              className="border-rose-200 focus:border-rose-400 min-h-[44px] text-base"
              required
            />
          </div>

          <div className="space-y-3">
            <Label htmlFor="contactPerson" className="text-rose-700 font-medium text-base">
              Kontaktperson *
            </Label>
            <Input
              id="contactPerson"
              type="text"
              value={formData.contactPerson}
              onChange={(e) => handleInputChange('contactPerson', e.target.value)}
              className="border-rose-200 focus:border-rose-400 min-h-[44px] text-base"
              required
            />
          </div>

          <div className="space-y-3">
            <Label htmlFor="email" className="text-rose-700 font-medium text-base">
              E-postadress *
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="border-rose-200 focus:border-rose-400 min-h-[44px] text-base"
              required
            />
          </div>

          <div className="space-y-3">
            <Label htmlFor="phone" className="text-rose-700 font-medium text-base">
              Telefonnummer *
            </Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className="border-rose-200 focus:border-rose-400 min-h-[44px] text-base"
              required
            />
          </div>

          <div className="space-y-3">
            <Label htmlFor="location" className="text-rose-700 font-medium text-base">
              Plats / Ort *
            </Label>
            <Input
              id="location"
              type="text"
              value={formData.location}
              onChange={(e) => handleInputChange('location', e.target.value)}
              className="border-rose-200 focus:border-rose-400 min-h-[44px] text-base"
              required
            />
          </div>

          <div className="space-y-4">
            <Label className="text-rose-700 font-medium text-base">
              Har ni ett bokningssystem idag?
            </Label>
            <RadioGroup
              value={formData.bookingSystem}
              onValueChange={(value) => handleInputChange('bookingSystem', value)}
              className="flex flex-col space-y-3"
            >
              <div className="flex items-center space-x-3 py-2">
                <RadioGroupItem value="ja" id="ja" className="w-5 h-5" />
                <Label htmlFor="ja" className="text-gray-700 text-base cursor-pointer">Ja</Label>
              </div>
              <div className="flex items-center space-x-3 py-2">
                <RadioGroupItem value="nej" id="nej" className="w-5 h-5" />
                <Label htmlFor="nej" className="text-gray-700 text-base cursor-pointer">Nej</Label>
              </div>
              <div className="flex items-center space-x-3 py-2">
                <RadioGroupItem value="osaeker" id="osaeker" className="w-5 h-5" />
                <Label htmlFor="osaeker" className="text-gray-700 text-base cursor-pointer">Osäker</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-3">
            <Label htmlFor="additional" className="text-rose-700 font-medium text-base">
              Övrigt ni vill dela med er av?
            </Label>
            <Textarea
              id="additional"
              value={formData.additional}
              onChange={(e) => handleInputChange('additional', e.target.value)}
              className="border-rose-200 focus:border-rose-400 min-h-[120px] text-base"
              placeholder="Berätta gärna lite mer om er restaurang, era mål, eller frågor ni har..."
            />
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full bg-gradient-to-r from-rose-500 to-purple-600 hover:from-rose-600 hover:to-purple-700 text-white py-4 text-lg font-medium min-h-[48px] transition-all duration-300"
          >
            Skicka in intresseanmälan
          </Button>

          <div className="text-center text-sm text-gray-600 mt-6 space-y-1">
            <p>Vi hör av oss inom 1 arbetsdag.</p>
            <p>Ingen bindning – bara ett första steg mot samarbete.</p>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default MobileOptimizedPartnerForm;
