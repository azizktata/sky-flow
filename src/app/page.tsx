import { Button } from "@/components/ui/button";
import ContactForm from "@/components/ui/contactForm";
import HomeCarousel from "@/components/ui/homeCarousel";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import {
  ArrowDownUpIcon,
  Container,
  Folder,
  Globe2Icon,
  Info,
  Mail,
  MapPin,
  Phone,
  SearchCheckIcon,
  Ship,
  Trophy,
  User,
  Users,
  Zap,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section>
        <HomeCarousel />
      </section>
      <section id="about" className="w-[90%] m-auto my-16">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="flex flex-col items-start w-full sm:w-2/3  md:w-1/2 xl:pr-32">
            <h4 className="text-lg">
              <span className="text-[#02446E]">Sky</span>
              <span className="text-[#C570B8]"> Flow</span>
            </h4>
            <h1 className="text-5xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#02446E] to-[#C570B8] mb-4">
              Connecting the World Through Trade
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              Unlock new opportunities with our reliable import and export
              solutions. From logistics and compliance to seamless international
              shipping, we connect businesses across borders to help you thrive
              in a competitive global market
            </p>
            <Button
              variant={"outline"}
              className="mt-8 px-6 py-6 rounded-sm text-white font-normal text-base bg-[#0E305D] border-none"
            >
              Contact us
            </Button>
          </div>
          <div className="relative h-[380px] w-full  md:w-1/2">
            <Image
              src="/hero-1.jpg"
              alt="hero"
              fill
              className="object-cover "
            />
          </div>
        </div>
      </section>

      <section className="w-full mb-16">
        <Card radius="none" className="h-[550px] ">
          <div className="relative w-full h-full overflow-hidden bg-gray-100">
            <Image
              fill
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src="/logistics.jpg"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-linear"></div>
            {/* <div className="absolute inset-0 bg-gradient-to-l from-black/40 via-transparent to-transparent"></div> */}
          </div>
          <CardBody className="absolute inset-0 mb-16  z-10 flex items-center justify-center">
            <div className="mt-12  flex flex-col items-center w-auto mb-6  ">
              <Image
                src="/directions.svg"
                alt="logo"
                width={240}
                height={115}
              />
              <h1 className="mb-4 max-w-xl font-semibold text-xl sm:text-3xl lg:text-4xl xl:text-6xl text-white text-center tracking-wider">
                {" "}
                <span className="text-[#004EB2]"> Import </span> &{" "}
                <span className="text-[#C570B8]">Export</span> Solutions
              </h1>
              <p className="text-base lg:text-lg text-center text-gray-100 font-normal mb-4 max-w-md tracking-widest">
                your gateway way to global trade, offering imporiting &
                exporting services your
              </p>
            </div>
          </CardBody>
        </Card>
      </section>

      <section className="w-[90%] lg:w-[80%] m-auto mb-16">
        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
          <div className="w-full sm:w-2/3 md:w-1/2 xl:pr-24 mb-8 md:mb-0">
            <h4 className="text-lg font-light text-[#C570B8]">Global</h4>
            <h1 className="text-5xl tracking-wider font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#02446E] to-[#C570B8] mb-4">
              We offer global trading chain
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              We offer a wide range of services to help you navigate the
              complexities of global trade. From customs brokerage and
              compliance to freight forwarding and logistics, we provide
              end-to-end solutions to help you grow your business and expand
              your reach.
            </p>
            <div className="flex flex-col items-start w-full  gap-2">
              <div className="flex items-center gap-2">
                <p className="text-[#0E305D] font-semibold text-lg">
                  🌍 50+ Countries Served
                </p>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-[#0E305D] font-semibold text-lg">
                  🚚 1M+ Shipments Delivered
                </p>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-[#0E305D] font-semibold text-lg">
                  ⭐ 95% Client Satisfaction
                </p>
              </div>
            </div>
            <Button
              variant={"outline"}
              className="mt-8 px-6 py-6 rounded-sm text-white font-normal text-base bg-[#0E305D] border-none hover:text-[#0E305D] hover:border-[#0E305D]"
            >
              <a href="#services">Explore our services</a>
            </Button>
          </div>
          <div className="w-full md:w-1/2 flex gap-4">
            <div className="flex flex-col gap-4 w-1/2 ">
              <div className="relative h-[250px] w-full">
                <Image
                  src="/transport-2.jpg"
                  alt="hero"
                  fill
                  className="object-cover h-full rounded-lg"
                />
              </div>
              <div className="relative h-[250px] w-full">
                <Image
                  src="/transport-1.jpg"
                  alt="hero"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4  w-1/2 mt-16">
              <div className="relative h-[250px] w-full">
                <Image
                  src="/hero-1.jpg"
                  alt="hero"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="relative h-[250px] w-full">
                <Image
                  src="/transport-3.jpg"
                  alt="hero"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full mb-16">
        <Card radius="none" className="h-[350px] ">
          <div className="relative w-full h-full overflow-hidden bg-gray-100">
            <Image
              fill
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src="/workers.jpg"
              loading="eager"
            />

            {/* <div className="absolute inset-0 bg-gradient-to-l from-black/40 via-transparent to-transparent"></div> */}
          </div>
          <CardBody className="absolute inset-0 mb-16  z-10 flex items-center justify-center">
            <div className="mt-12  flex flex-col items-center w-auto mb-6  ">
              <h1 className="mb-4 w-full font-semibold text-3xl lg:text-4xl  text-white text-center tracking-wider">
                {" "}
                Providing full range of transportation
              </h1>
              <p className="text-base lg:text-lg text-center text-gray-100 font-normal mb-4 max-w-xs tracking-widest">
                Reliable import and export solutions for every industry
              </p>
            </div>
          </CardBody>
        </Card>
        <div className="flex flex-col md:flex-row justify-between  items-center gap-2 -mt-24 z-10 w-[80%] m-auto">
          <Card className="relative w-full md:w-1/3 h-[250px]">
            <CardBody>
              <Image
                src="/transport-3.jpg"
                alt="hero"
                fill
                className="object-cover "
              />
            </CardBody>
            <CardFooter className="flex items-center justify-center">
              {" "}
              <p className="text-center">
                <span className="font-bold text-[#C570B8] "> 1.</span>{" "}
                <span className="font-bold text-lg text-[#002F6B] ">
                  Road transport
                </span>
              </p>
            </CardFooter>
          </Card>
          <Card className="relative w-full md:w-1/3 h-[250px]">
            <CardBody>
              <Image
                src="/transport-2.jpg"
                alt="hero"
                fill
                className="object-cover "
              />
            </CardBody>
            <CardFooter className="flex items-center justify-center">
              {" "}
              <p className="text-center">
                <span className="font-bold text-[#C570B8] "> 2.</span>{" "}
                <span className="font-bold text-lg text-[#002F6B] ">
                  Air freight
                </span>
              </p>
            </CardFooter>
          </Card>
          <Card className="relative w-full md:w-1/3 h-[250px]">
            <CardBody>
              <Image
                src="/cover-3.jpg"
                alt="hero"
                fill
                className="object-cover "
              />
            </CardBody>
            <CardFooter className="flex items-center justify-center">
              {" "}
              <p className="text-center">
                <span className="font-bold text-[#C570B8] "> 3.</span>{" "}
                <span className="font-bold text-lg text-[#002F6B] ">
                  Sea cargo
                </span>
              </p>
            </CardFooter>
          </Card>
        </div>
      </section>
      <section id="services" className="w-[90%] lg:w-[80%] m-auto my-16">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="relative  self-stretch w-full md:w-1/2">
            <Image
              src="/transport-2.jpg"
              alt="hero"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="flex flex-col items-start w-full xl:w-2/3 ">
            <h4 className="text-lg font-light text-[#C570B8]">Services</h4>
            <h1 className="text-5xl font-semibold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-[#02446E] to-[#C570B8] mb-4">
              Connecting Markets, Simplifying Logistics
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed max-w-md mb-4">
              Unlock new opportunities with our reliable import and export
              solutions. From logistics and compliance to seamless international
              shipping.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex flex-col items-start gap-2 mt-4 max-w-[260px] xl:max-w-[200px] ">
                <Ship size={24} color="#C570B8" />
                <div>
                  <p className="text-[#0E305D] font-semibold text-base sm:text-lg">
                    Freight forwarding (air/sea/road)
                  </p>
                  <p className="text-gray-700 max-w-[35ch]">
                    We offer a wide range of services
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-start gap-2 mt-4 max-w-[260px] xl:max-w-[200px]">
                <ArrowDownUpIcon size={24} color="#C570B8" />
                <div>
                  <p className="text-[#0E305D] font-semibold text-base sm:text-lg">
                    Supply chain management
                  </p>
                  <p className="text-gray-700 max-w-sm">
                    We offer a wide range of services
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-start gap-2 mt-4 max-w-[260px] xl:max-w-[200px]">
                <SearchCheckIcon size={24} color="#C570B8" />
                <div>
                  <p className="text-[#0E305D] font-semibold text-base sm:text-lg">
                    Product sourcing
                  </p>
                  <p className="text-gray-700 max-w-sm">
                    We offer a wide range of services
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-[#012237] py-16 flex justify-center items-center mb-16 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-6  text-white max-w-6xl w-full">
          {/* Card 1 */}
          <div className="flex flex-col items-center p-4 bg-white/10 rounded-md shadow-md">
            <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-b from-purple-500 to-pink-500 rounded-full mb-4">
              <Folder className="text-white w-6 h-6" />
            </div>
            <h3 className="text-3xl font-bold text-white">+578</h3>
            <p className="text-sm text-gray-300">Projects done</p>
          </div>
          {/* Card 2 */}
          <div className="flex flex-col items-center p-4 bg-white/10 rounded-md shadow-md">
            <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-b from-purple-500 to-pink-500 rounded-full mb-4">
              <Users className="text-white w-6 h-6" />
            </div>
            <h3 className="text-3xl font-bold text-white">+67</h3>
            <p className="text-sm text-gray-300">Members</p>
          </div>
          {/* Card 3 */}
          <div className="flex flex-col items-center p-4 bg-white/10 rounded-md shadow-md">
            <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-b from-purple-500 to-pink-500 rounded-full mb-4">
              <User className="text-white w-6 h-6" />
            </div>
            <h3 className="text-3xl font-bold text-white">+378</h3>
            <p className="text-sm text-gray-300">Clients</p>
          </div>
          {/* Card 4 */}
          <div className="flex flex-col  items-center p-4 bg-white/10 rounded-md shadow-md">
            <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-b from-purple-500 to-pink-500 rounded-full mb-4">
              <Container className="text-white w-6 h-6" />
            </div>
            <h3 className="text-3xl font-bold text-white">+10</h3>
            <p className="text-sm text-gray-300">Years of experience</p>
          </div>
        </div>
      </section>
      <section className="w-[90%] lg:w-[80%] m-auto my-16">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="flex flex-col items-start w-full  md:w-1/2 ">
            <h4 className="text-lg font-light text-[#C570B8]">Expertise</h4>
            <h1 className="text-5xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#02446E] to-[#C570B8] mb-4">
              We operate in multiple channels
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed max-w-lg">
              Unlock new opportunities with our reliable import and export
              solutions. From logistics and compliance to seamless international
              shipping.
            </p>
            <div>
              <div className="flex items-start gap-2 mt-4">
                <Globe2Icon size={24} color="#48169C" />
                <div className="flex flex-col">
                  <p className="text-[#0E305D] font-semibold text-base sm:text-lg">
                    Global reach
                  </p>
                  <p className="text-gray-700 max-w-sm">
                    We offer a wide range of services to help you navigate the
                    complexities of global trade.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2 mt-4">
                <Zap size={24} color="#48169C" />
                <div className="flex flex-col">
                  <p className="text-[#0E305D] font-semibold text-base sm:text-lg">
                    Rapid Service
                  </p>
                  <p className="text-gray-700 max-w-sm">
                    We offer a wide range of services to help you navigate the
                    complexities of global trade.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2 mt-4">
                <Trophy size={24} color="#48169C" />
                <div className="flex flex-col">
                  <p className="text-[#0E305D] font-semibold text-base sm:text-lg">
                    Expert team
                  </p>
                  <p className="text-gray-700 max-w-sm">
                    We offer a wide range of services to help you navigate the
                    complexities of global trade.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-[550px] self-stretch w-full md:w-1/2 flex gap-4">
            <div className="relative h-full w-full">
              <Image
                src="/transport-2.jpg"
                alt="hero"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="relative h-full w-full">
              <Image
                src="/transport-3.jpg"
                alt="hero"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="mb-16">
        <div className="flex flex-col items-center w-[90%] py-8 mx-auto ">
          {/* <h4 className="text-[#02446E]  mb-2">Why choose us</h4> */}
          <h1 className="font-bold text-center text-3xl md:text-5xl text-[#333333] max-w-lg mb-4">
            Why choose us ?
          </h1>
          <p className="text-[#606060] text-base sm:text-lg max-w-sm ">
            the best choice for your business
          </p>
          <div
            className="flex flex-col lg:flex-row items-start gap-8 mt-16
          "
          >
            <div className="flex flex-col items-start gap-2  max-w-xs mx-auto">
              <Globe2Icon className="text-[#C570B8] w-16 h-16" />
              <h4 className="text-[#02446E] font-bold"> Trsuted network</h4>
              <p className="text-[#606060] text-base  max-w-[260px] sm:text-medium ">
                Decades of experience in the yachting industry.
              </p>
            </div>
            <div className="hidden lg:block">
              {/* <Separator orientation="vertical" style={{ height: "160px" }} /> */}
            </div>
            <div className="block md:hidden text-center self-start">
              {/* <Separator orientation="horizontal" style={{ width: "160px" }} /> */}
            </div>
            <div className="flex flex-col md:flex-row justify-center gap-8">
              <div className="flex flex-col items-start max-w-xs mx-auto  gap-2">
                <Container className="text-[#C570B8] w-16 h-16" />
                <h4 className="text-[#02446E] font-bold">
                  Competitive pricing
                </h4>
                <p className="text-[#606060] text-base sm:text-medium  max-w-[260px] ">
                  Tailored solutions to meet your unique needs.
                </p>
              </div>
              <div className="flex flex-col items-start gap-2  max-w-[260px] mx-auto">
                <Info className="text-[#C570B8] w-16 h-16" />
                <h4 className="text-[#02446E] font-bold">24/7 Support</h4>
                <p className="text-[#606060] text-base sm:text-medium  max-w-[260px]">
                  Always available for your peace of mind.
                </p>
              </div>
              <div className="flex flex-col items-start gap-2  max-w-[260px] mx-auto">
                <Users className="text-[#C570B8] w-16 h-16" />
                <h4 className="text-[#02446E] font-bold">Global Reach</h4>
                <p className="text-[#606060] text-base sm:text-medium max-w-[260px] ">
                  Serving clients worldwide with professionalism and care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className=" relative w-full bg-gray-50 py-12">
        <div className="absolute inset-y-0 left-0 w-2/3 bg-gradient-to-r from-[#02446E] to-[#C570B8] opacity-10 rounded-lg z-0"></div>
        <div className="w-[90%] lg:w-[70%] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Gradient Background */}

          {/* Contact Info Section */}
          <div className="flex flex-col items-start w-full md:w-1/2 z-10">
            <h4 className="text-lg font-light text-[#C570B8]">Contact us</h4>
            <h1 className="text-3xl md:text-5xl font-semibold tracking-wider text-[#0E305D] mb-6">
              We&apos;re open to talk
            </h1>
            <div>
              {/* Contact Items */}
              <div className="flex items-center gap-4 mb-4">
                <Mail size={24} color="#48169C" />
                <p className="text-[#0E305D] font-semibold text-base sm:text-lg">
                  contact@gmail.com
                </p>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <MapPin size={24} color="#48169C" />
                <p className="text-[#0E305D] font-semibold text-base sm:text-lg">
                  Tunis, Ben Arous
                </p>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <Phone size={24} color="#48169C" />
                <p className="text-[#0E305D] font-semibold text-base sm:text-lg">
                  +216 53 488 169
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="w-full md:w-1/2 lg:w-1/3 z-10">
            <div className="bg-white p-8 rounded-lg shadow-md max-w-md mx-auto">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
