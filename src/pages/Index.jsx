import { Button } from "@/components/ui/button";
import { Carousel } from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

function Index() {
  return (
    <div className="space-y-10">
      {/* Hero Section */}
      <section className="relative w-full h-[500px] bg-cover bg-center" style={{ backgroundImage: "url('/images/hero-horse.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-5xl font-bold">Welcome to Horse Haven</h1>
          <p className="text-xl mt-4">Discover the beauty and majesty of horses</p>
          <Button className="mt-6">Learn More</Button>
        </div>
      </section>

      {/* About Horses */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center">About Horses</h2>
        <p className="mt-4 text-center">
          Horses have been an integral part of human history for thousands of years. They have been used for transportation, work, and companionship. Today, horses are beloved by many for their beauty, grace, and strength.
        </p>
      </section>

      {/* Gallery */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center">Gallery</h2>
        <Carousel className="mt-6">
          <img src="/images/horse1.jpg" alt="Horse 1" />
          <img src="/images/horse2.jpg" alt="Horse 2" />
          <img src="/images/horse3.jpg" alt="Horse 3" />
        </Carousel>
      </section>

      {/* Breeds */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center">Horse Breeds</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Arabian</CardTitle>
            </CardHeader>
            <CardContent>
              <img src="/images/arabian.jpg" alt="Arabian Horse" className="w-full h-48 object-cover" />
              <p className="mt-2">Known for their endurance and speed, Arabian horses are one of the oldest horse breeds in the world.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Thoroughbred</CardTitle>
            </CardHeader>
            <CardContent>
              <img src="/images/thoroughbred.jpg" alt="Thoroughbred Horse" className="w-full h-48 object-cover" />
              <p className="mt-2">Thoroughbreds are best known for their agility and speed, making them popular in horse racing.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Quarter Horse</CardTitle>
            </CardHeader>
            <CardContent>
              <img src="/images/quarterhorse.jpg" alt="Quarter Horse" className="w-full h-48 object-cover" />
              <p className="mt-2">Quarter Horses are known for their strength and versatility, excelling in various equestrian activities.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <Card>
            <CardContent>
              <p>"Horse Haven is a wonderful place to learn about and appreciate horses. The staff is knowledgeable and friendly."</p>
              <p className="mt-2 font-bold">- Jane Doe</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <p>"I had an amazing experience at Horse Haven. The horses are well cared for and the facilities are top-notch."</p>
              <p className="mt-2 font-bold">- John Smith</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Form */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center">Contact Us</h2>
        <form className="mt-6 space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">Name</label>
            <Input id="name" type="text" placeholder="Your Name" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">Email</label>
            <Input id="email" type="email" placeholder="Your Email" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium">Message</label>
            <Textarea id="message" placeholder="Your Message" />
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </section>
    </div>
  );
}

export default Index;