import { Button } from "@/components/ui/button";
import ContactForm from "@/components/ui/contactForm";
import HomeCarousel from "@/components/ui/homeCarousel";
import { Card, CardBody } from "@nextui-org/card";
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

export default function Home() {
  return (
    <main>
      <section>
        <HomeCarousel />
      </section>
      <section id="about" className="w-[90%] m-auto my-16">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="flex flex-col items-start w-full   md:w-1/2 xl:pr-32">
            <h4 className="text-lg">
              <span className="text-[#02446E]">Sky</span>
              <span className="text-[#C570B8]"> Flow</span>
            </h4>
            <h1 className="text-4xl sm:text-5xl max-w-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#02446E] to-[#C570B8] mb-4">
              Ouvrir des portes aux opportunités mondiales
            </h1>
            <p className="text-lg text-gray-700 max-w-lg xl:max-w-xl leading-relaxed">
              Skyflow est une entreprise dynamique spécialisée dans
              l&apos;importation et l&apos;exportation de produits et services
              divers à l’échelle mondiale. Fondée avec l’objectif de connecter
              les marchés internationaux. Notre société offre une solution
              complète pour répondre aux besoins de nos clients et partenaires
              commerciaux dans divers secteurs.
            </p>
            <Button
              variant={"outline"}
              className="mt-8 px-6 py-6 rounded-sm text-white font-normal text-base bg-[#0E305D] border-none"
            >
              Contactez-nous
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
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-linear"></div>
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
              <h1 className="mb-4 max-w-3xl font-semibold text-3xl sm:text-3xl lg:text-4xl xl:text-5xl text-white text-center tracking-wider">
                {" "}
                Services d&apos;importation et d&apos;exportation à
                l&apos;échelle mondiale.
              </h1>
              <p className="text-lg text-white max-w-sm text-center leading-relaxed mb-8">
                vous bénéficiez d’une solution clé en main pour vos besoins en
                import et export
              </p>
              {/* <div className="">
                <ul className="flex  items-center justify-center gap-4 text-gray-300">
                  <div className="flex items-start gap-2">
                    <CheckCheck size={48} color="#C570B8" />
                    <li className="flex flex-col max-w-xs">
                      <span className="font-medium text-white text-lg">
                        Produits alimentaires
                      </span>{" "}
                      Importation et exportation de produits frais, surgelés et
                      transformés.
                    </li>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCheck size={48} color="#C570B8" />
                    <li className="flex flex-col max-w-xs">
                      <span className="font-medium text-white text-lg">
                        Produits spécifiques
                      </span>{" "}
                      Matières premières, produits chimiques, équipements
                      médicaux, etc.
                    </li>
                  </div>
                </ul>
              </div> */}
            </div>
          </CardBody>
        </Card>
      </section>

      <section className="w-[90%]  m-auto mb-16">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 ">
          {/* <div className="w-full sm:w-2/3 md:w-1/2 xl:pr-24 mb-8 md:mb-0">
            <h4 className="text-lg font-light text-[#C570B8]">Global</h4>
            <h1 className="text-5xl tracking-wider font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#02446E] to-[#C570B8] mb-4">
              We offer global trading chain
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Avec Sky flow, vous bénéficiez d’une solution clé en main pour vos
              besoins en import et export. Notre ambition est de bâtir un pont
              entre les marchés, favorisant la croissance et le succès de nos
              clients à travers le monde.
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
          </div> */}
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
          <div className="w-full   md:w-1/2 xl:pr-24 mb-8 md:mb-0 xl:mt-16">
            <h4 className="text-lg font-light text-[#C570B8]">Services</h4>
            <h1 className="text-4xl sm:text-5xl max-w-lg font-semibold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-[#02446E] to-[#C570B8] mb-4">
              Nous opérons dans tous les domaines
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed max-w-md mb-4">
              vous bénéficiez d’une solution clé en main pour vos besoins en
              import et export. Notre ambition est de bâtir un pont entre les
              marchés, favorisant la croissance et le succès de nos clients à
              travers le monde.
            </p>
            <div className="flex gap-2  flex-wrap  w-full ">
              <div className="flex flex-col items-start gap-2 mt-4   ">
                <Ship size={24} color="#C570B8" />
                <div>
                  <p className="text-[#0E305D] font-semibold text-base sm:text-lg">
                    Produits alimentaires
                  </p>
                  <p className="text-gray-700 text-sm max-w-[30ch]">
                    Importation et exportation de produits frais, surgelés et
                    transformés.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-start gap-2 mt-4 ">
                <ArrowDownUpIcon size={24} color="#C570B8" />
                <div>
                  <p className="text-[#0E305D] font-semibold text-base sm:text-lg">
                    Produits spécifiques
                  </p>
                  <p className="text-gray-700 text-sm max-w-[30ch]">
                    Matières premières, produits chimiques, équipements
                    médicaux, etc.
                  </p>
                </div>
              </div>
              {/* <div className="flex flex-col items-start gap-2 mt-4 max-w-[260px] xl:max-w-[200px]">
                <SearchCheckIcon size={24} color="#C570B8" />
                <div>
                  <p className="text-[#0E305D] font-semibold text-base sm:text-lg">
                    Product sourcing
                  </p>
                  <p className="text-gray-700 max-w-sm">
                    We offer a wide range of services
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* <section className="w-full mb-16">
        <Card radius="none" className="h-[350px] ">
          <div className="relative w-full h-full overflow-hidden bg-gray-100">
            <Image
              fill
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src="/workers.jpg"
              loading="eager"
            />
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
      </section> */}
      {/* <section id="services" className="w-[90%] lg:w-[80%] m-auto my-16">
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
            <h1 className="text-5xl max-w-lg font-semibold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-[#02446E] to-[#C570B8] mb-4">
              Nous opérons dans tous les domaines
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed max-w-md mb-4">
              vous bénéficiez d’une solution clé en main pour vos besoins en
              import et export. Notre ambition est de bâtir un pont entre les
              marchés, favorisant la croissance et le succès de nos clients à
              travers le monde.
            </p>
            <div className="flex flex-wrap  w-full ">
              <div className="flex flex-col items-start gap-2 mt-4   ">
                <Ship size={24} color="#C570B8" />
                <div>
                  <p className="text-[#0E305D] font-semibold text-base sm:text-lg">
                    Produits alimentaires
                  </p>
                  <p className="text-gray-700 text-sm max-w-xs">
                    Importation et exportation de produits frais, surgelés et
                    transformés.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-start gap-2 mt-4 ">
                <ArrowDownUpIcon size={24} color="#C570B8" />
                <div>
                  <p className="text-[#0E305D] font-semibold text-base sm:text-lg">
                    Produits spécifiques
                  </p>
                  <p className="text-gray-700 text-sm max-w-xs">
                    Matières premières, produits chimiques, équipements
                    médicaux, etc.
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
      </section> */}
      <section className="w-full bg-[#012237] py-16 flex justify-center items-center mb-16 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-6  text-white max-w-6xl w-full">
          {/* Card 1 */}
          <div className="flex flex-col items-center p-4 bg-white/10 rounded-md shadow-md">
            <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-b from-purple-500 to-pink-500 rounded-full mb-4">
              <Folder className="text-white w-6 h-6" />
            </div>
            <h3 className="text-3xl font-bold text-white">Qualité </h3>
            <p className="text-sm text-center text-gray-200">
              Nous garantissons des produits conformes aux normes
              internationales.
            </p>
          </div>
          {/* Card 2 */}
          <div className="flex flex-col items-center p-4 bg-white/10 rounded-md shadow-md">
            <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-b from-purple-500 to-pink-500 rounded-full mb-4">
              <Users className="text-white w-6 h-6" />
            </div>
            <h3 className="text-3xl font-bold text-white">Fiabilité </h3>
            <p className="text-sm text-center text-gray-200">
              Respect des délais et des engagements pris envers nos partenaires.
            </p>
          </div>
          {/* Card 3 */}
          <div className="flex flex-col items-center p-4 bg-white/10 rounded-md shadow-md">
            <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-b from-purple-500 to-pink-500 rounded-full mb-4">
              <User className="text-white w-6 h-6" />
            </div>
            <h3 className="text-3xl font-bold text-white">Flexibilité </h3>
            <p className="text-sm text-gray-200 text-center">
              Solutions adaptées à chaque client et projet.
            </p>
          </div>
          {/* Card 4 */}
          <div className="flex flex-col  items-center p-4 bg-white/10 rounded-md shadow-md">
            <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-b from-purple-500 to-pink-500 rounded-full mb-4">
              <Container className="text-white w-6 h-6" />
            </div>
            <h3 className="text-3xl font-bold text-white">Innovation </h3>
            <p className="text-sm text-gray-200 text-center">
              Intégration de la technologie pour un commerce fluide et efficace
            </p>
          </div>
        </div>
      </section>
      <section className="w-[90%] lg:w-[80%] m-auto my-16">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="flex flex-col items-start w-full  md:w-1/2 ">
            <h4 className="text-lg font-light text-[#C570B8]">Maitrise</h4>
            <h1 className="text-5xl max-w-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#02446E] to-[#C570B8] mb-4">
              Pourquoi choisir Skyflow ?
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed max-w-lg">
              Avec Sky flow, vous bénéficiez d’une solution clé en main pour vos
              besoins en import et export. Notre ambition est de bâtir un pont
              entre les marchés, favorisant la croissance et le succès de nos
              clients à travers le monde.
            </p>
            <div>
              <div className="flex items-start gap-2 mt-4">
                <Globe2Icon size={24} color="#48169C" />
                <div className="flex flex-col">
                  <p className="text-[#0E305D] font-semibold text-base max-w-xs  sm:text-lg">
                    Un réseau mondial de partenaires fiables.
                  </p>
                  <p className="text-gray-700 max-w-sm">
                    Un réseau international dédié à la confiance et à la
                    collaboration.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2 mt-4">
                <Zap size={24} color="#48169C" />
                <div className="flex flex-col">
                  <p className="text-[#0E305D] font-semibold text-base max-w-xs sm:text-lg">
                    Expertise dans la logistique et la gestion des douanes
                  </p>
                  <p className="text-gray-700 max-w-sm">
                    Maîtrise de la logistique et de la gestion des procédures
                    douanières.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2 mt-4">
                <Trophy size={24} color="#48169C" />
                <div className="flex flex-col">
                  <p className="text-[#0E305D] font-semibold text-base sm:text-lg">
                    service client disponible et réactif.
                  </p>
                  <p className="text-gray-700 max-w-sm">
                    Un service client toujours disponible, réactif et à
                    l&apos;écoute, offrant des réponses rapides
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
      {/* <section className="mb-16">
        <div className="flex flex-col items-center w-[90%] py-8 mx-auto ">
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
            </div>
            <div className="block md:hidden text-center self-start">
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
      </section> */}
      <section id="contact" className=" relative w-full bg-gray-50 py-12">
        <div className="absolute inset-y-0 left-0 w-2/3 bg-gradient-to-r from-[#02446E] to-[#C570B8] opacity-10 rounded-lg z-0"></div>
        <div className="w-[90%] lg:w-[70%] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Gradient Background */}

          {/* Contact Info Section */}
          <div className="flex flex-col items-start w-full md:w-1/2 z-10">
            <h4 className="text-lg font-light text-[#C570B8]">
              Contactez-nous
            </h4>
            <h1 className="text-3xl md:text-5xl font-semibold tracking-wider text-[#0E305D] mb-6">
              Discutez avec nous de vos projets dès aujourd’hui !
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
