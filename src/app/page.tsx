import { Button } from "@/components/ui/button";
import ContactForm from "@/components/ui/contactForm";
import HomeCarousel from "@/components/ui/homeCarousel";
import { Card, CardBody } from "@nextui-org/card";
import { fetchDataFromWP } from "../utils/fetchDataFromWP";
import {
  ArrowDownUpIcon,
  Container,
  Folder,
  Globe2Icon,
  Mail,
  MapPin,
  Phone,
  Ship,
  Trophy,
  User,
  Users,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

export default async function Home() {
  const pageContent = await fetchDataFromWP();
  // console.log(pageContent);
  const logo_skyflow = pageContent[0]?.acf?.["logo_skyflow"];
  // const navMenuLinks = pageContent[0]?.acf?.["nav_menu_links"];
  // const menuLinks =
  //   navMenuLinks &&
  //   (Object.values(navMenuLinks) as {
  //     label: string;
  //     path: string;
  //   }[]);

  const carouselSection = pageContent[0]?.acf?.["carousel_section"];
  const heroSection = pageContent[0]?.acf?.["hero_section"];
  const aboutSection = pageContent[0]?.acf?.["about_section"];
  const servicesSection = pageContent[0]?.acf?.["services_section"];
  const valeursSection = pageContent[0]?.acf?.["valeurs_section"];
  const expertiseSection = pageContent[0]?.acf?.["expertise_section"];
  const contactSection = pageContent[0]?.acf?.["contact_section"];
  return (
    <>
      <Header
        logoUrl={logo_skyflow}
        phone={contactSection && contactSection.phone}
        // menuLinks={menuLinks}
      />
      <main>
        {carouselSection && (
          <section>
            <HomeCarousel carousel={carouselSection} />
          </section>
        )}

        {heroSection && (
          <section
            id={"qui-sommes-nous"}
            className="w-[90%] xl:w-[80%] m-auto my-16"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex flex-col items-start w-full   md:w-1/2 xl:pr-32">
                <h4 className="text-lg">
                  <span className="text-[#02446E]">Sky</span>
                  <span className="text-[#C570B8]"> Flow</span>
                </h4>
                <h1 className="text-4xl sm:text-5xl max-w-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#02446E] to-[#C570B8] mb-4">
                  {heroSection.title}
                </h1>
                <p className="text-lg text-gray-700 max-w-lg xl:max-w-xl leading-relaxed">
                  {heroSection.description}
                </p>
                <Button
                  variant={"outline"}
                  className="mt-8 px-6 py-6 rounded-sm text-white font-normal text-base bg-[#0E305D] border-none"
                >
                  Contactez-nous
                </Button>
              </div>
              <div className="relative h-[480px] w-full  md:w-1/2">
                <Image
                  src={heroSection.image || "/hero-1.jpg"}
                  alt="hero"
                  fill
                  className="object-cover "
                  priority
                />
              </div>
            </div>
          </section>
        )}

        {aboutSection && (
          <section id="about" className="w-full mb-16">
            <Card radius="none" className="h-[550px] ">
              <div className="relative w-full h-full overflow-hidden bg-gray-100">
                <Image
                  fill
                  alt="Card background"
                  className="z-0 w-full h-full object-cover"
                  src={aboutSection?.["background_image"] || "/logistics.jpg"}
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-linear"></div>
                {/* <div className="absolute inset-0 bg-gradient-to-l from-black/40 via-transparent to-transparent"></div> */}
              </div>
              <CardBody className="absolute inset-0 mb-16  z-10 flex items-center justify-center">
                <div className="mt-12  flex flex-col items-center w-auto mb-6  ">
                  <Image
                    src={aboutSection.logo}
                    alt="logo"
                    width={240}
                    height={115}
                  />
                  <h1 className="mb-4 max-w-3xl font-semibold text-3xl sm:text-3xl lg:text-4xl xl:text-5xl text-white text-center tracking-wider">
                    {" "}
                    {aboutSection.title}
                  </h1>
                  <p className="text-lg text-white max-w-sm text-center leading-relaxed mb-8">
                    {aboutSection.description}
                  </p>
                </div>
              </CardBody>
            </Card>
          </section>
        )}

        {servicesSection && (
          <section id="services" className="w-[90%] xl:w-[75%]  mx-auto mb-16">
            <div className="flex flex-col md:flex-row justify-center  gap-8 xl:gap-16 ">
              <div className="w-full md:w-1/2 flex gap-4">
                <div className="flex flex-col gap-4 w-1/2 ">
                  <div className="relative h-[250px] w-full">
                    <Image
                      src={servicesSection.image1}
                      alt="hero"
                      fill
                      className="object-cover h-full rounded-lg"
                    />
                  </div>
                  <div className="relative h-[250px] w-full">
                    <Image
                      src={servicesSection.image2}
                      alt="hero"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-4  w-1/2 mt-16">
                  <div className="relative h-[250px] w-full">
                    <Image
                      src={servicesSection.image3}
                      alt="hero"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div className="relative h-[250px] w-full">
                    <Image
                      src={servicesSection.image4}
                      alt="hero"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full   md:w-1/2  mb-8 md:mb-0 xl:mt-16">
                <h4 className="text-lg font-light text-[#C570B8]">Services</h4>
                <h1 className="text-4xl sm:text-5xl max-w-lg font-semibold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-[#02446E] to-[#C570B8] mb-4">
                  {servicesSection.title}
                </h1>
                <p className="text-lg text-gray-700 leading-relaxed max-w-lg mb-4">
                  {servicesSection.description}
                </p>
                <div className="flex gap-2  flex-wrap  w-full ">
                  <div className="flex flex-col items-start gap-2 mt-4   ">
                    <Ship size={24} color="#C570B8" />
                    <div>
                      <p className="text-[#0E305D] font-semibold text-base sm:text-lg">
                        {servicesSection.service1.title}
                      </p>
                      <p className="text-gray-700 text-sm max-w-[30ch]">
                        {servicesSection.service1.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-2 mt-4 ">
                    <ArrowDownUpIcon size={24} color="#C570B8" />
                    <div>
                      <p className="text-[#0E305D] font-semibold text-base sm:text-lg">
                        {servicesSection.service2.title}
                      </p>
                      <p className="text-gray-700 text-sm max-w-[30ch]">
                        {servicesSection.service2.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {valeursSection && (
          <section className="w-full bg-[#012237] py-16 flex justify-center items-center mb-16 px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-6  text-white w-[90%] ">
              <h1 className="col-span-full text-center text-5xl font-bold mb-4">
                Nos valeurs
              </h1>
              {/* Card 1 */}
              <div className="flex flex-col items-center p-4 bg-white/10 rounded-md shadow-md">
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-b from-purple-500 to-pink-500 rounded-full mb-4">
                  <Folder className="text-white w-6 h-6" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">
                  {valeursSection.valeur1.title}{" "}
                </h3>
                <p className="text-md max-w-xs text-center text-gray-200">
                  {valeursSection.valeur1.description}
                </p>
              </div>
              {/* Card 2 */}
              <div className="flex flex-col items-center p-4 bg-white/10 rounded-md shadow-md">
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-b from-purple-500 to-pink-500 rounded-full mb-4">
                  <Users className="text-white w-6 h-6" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">
                  {valeursSection.valeur2.title}{" "}
                </h3>
                <p className="text-md max-w-xs  text-center text-gray-200">
                  {valeursSection.valeur2.description}
                </p>
              </div>
              {/* Card 3 */}
              <div className="flex flex-col items-center p-4 bg-white/10 rounded-md shadow-md">
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-b from-purple-500 to-pink-500 rounded-full mb-4">
                  <User className="text-white w-6 h-6" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">
                  {valeursSection.valeur3.title}{" "}
                </h3>
                <p className="text-md max-w-xs  text-gray-200 text-center">
                  {valeursSection.valeur3.description}
                </p>
              </div>
              {/* Card 4 */}
              <div className="flex flex-col  items-center p-4 bg-white/10 rounded-md shadow-md">
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-b from-purple-500 to-pink-500 rounded-full mb-4">
                  <Container className="text-white w-6 h-6" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">
                  {valeursSection.valeur4.title}{" "}
                </h3>
                <p className="text-md max-w-xs  text-gray-200 text-center">
                  {valeursSection.valeur4.description}
                </p>
              </div>
            </div>
          </section>
        )}

        {expertiseSection && (
          <section className="w-[90%] lg:w-[80%] xl:w-[75%]  m-auto my-16">
            <div className="flex flex-col md:flex-row justify-between items-start gap-4 ">
              <div className="flex flex-col items-start w-full  md:w-1/2 mb-8 lg:mb-0">
                <h4 className="text-lg font-light text-[#C570B8]">Maîtrise </h4>
                <h1 className="text-5xl max-w-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#02446E] to-[#C570B8] mb-4">
                  {expertiseSection.title}
                </h1>
                <p className="text-lg text-gray-700 leading-relaxed max-w-lg">
                  {expertiseSection.description}
                </p>
                <div>
                  <div className="flex items-start gap-2 mt-4">
                    <Globe2Icon size={24} color="#48169C" />
                    <div className="flex flex-col">
                      <p className="text-[#0E305D] font-semibold text-base max-w-md  sm:text-lg">
                        {expertiseSection.offer1.title}
                      </p>
                      <p className="text-gray-700 max-w-sm">
                        {expertiseSection.offer1.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 mt-4">
                    <Zap size={24} color="#48169C" />
                    <div className="flex flex-col">
                      <p className="text-[#0E305D] font-semibold text-base max-w-sm sm:text-lg">
                        {expertiseSection.offer2.title}
                      </p>
                      <p className="text-gray-700 max-w-sm">
                        {expertiseSection.offer2.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 mt-4">
                    <Trophy size={24} color="#48169C" />
                    <div className="flex flex-col">
                      <p className="text-[#0E305D] font-semibold text-base sm:text-lg">
                        {expertiseSection.offer3.title}
                      </p>
                      <p className="text-gray-700 max-w-sm">
                        {expertiseSection.offer3.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-[550px] self-stretch w-full md:w-1/2 flex gap-4">
                <div className="relative h-full w-full">
                  <Image
                    src={expertiseSection.image1 || "/transport-2.jpg"}
                    alt="hero"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="relative h-full w-full">
                  <Image
                    src={expertiseSection.image2 || "/transport-3.jpg"}
                    alt="hero"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </section>
        )}
        <section
          id="contactez-nous"
          className=" relative w-full bg-gray-50 py-12"
        >
          <div className="absolute inset-y-0 left-0 w-2/3 bg-gradient-to-r from-[#02446E] to-[#C570B8] opacity-10 rounded-lg z-0"></div>
          <div className="w-[90%] lg:w-[70%] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Contact Info Section */}
            <div className="flex flex-col items-start w-full md:w-1/2 z-10">
              <h4 className="text-lg font-light text-[#C570B8]">
                Contactez-nous
              </h4>
              {contactSection && (
                <>
                  <h1 className="text-3xl md:text-5xl font-semibold tracking-wider text-[#0E305D] mb-6">
                    {contactSection.title}
                  </h1>
                  <div>
                    {/* Contact Items */}
                    <div className="flex items-center gap-4 mb-4">
                      <Mail size={24} color="#48169C" />
                      <p className="text-[#0E305D] font-semibold text-base sm:text-lg">
                        {contactSection.email}
                      </p>
                    </div>
                    <div className="flex items-center gap-4 mb-4">
                      <MapPin size={24} color="#48169C" />
                      <p className="text-[#0E305D] font-semibold text-base sm:text-lg">
                        {contactSection.address}
                      </p>
                    </div>
                    <div className="flex items-center gap-4 mb-4">
                      <Phone size={24} color="#48169C" />
                      <p className="text-[#0E305D] font-semibold text-base sm:text-lg">
                        +216 {contactSection.phone.slice(0, 2)}{" "}
                        {contactSection.phone.slice(2, 5)}{" "}
                        {contactSection.phone.slice(5, 8)}
                      </p>
                    </div>
                  </div>
                </>
              )}
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
      <Footer
        // menuLinks={menuLinks}
        logoUrl={logo_skyflow}
        email={contactSection && contactSection.email}
        phone={contactSection && contactSection.phone}
        address={contactSection && contactSection.address}
      />
    </>
  );
}
