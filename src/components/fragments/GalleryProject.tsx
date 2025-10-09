import { cn } from "@/lib/utils"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import Image from "next/image"

type MosaicImage = {
  src: string
  alt: string
}

type ProjectMosaicProps = {
  id?: string
  title?: string
  images?: MosaicImage[]
  className?: string
}

const defaultImages: MosaicImage[] = [
  { src: "/gallery/details-product.png", alt: "Tampilan utama proyek yang paling berkesan" },
  { src: "/gallery/hero-sneakersco.png", alt: "Detail UI fitur asisten email" },
  { src: "/gallery/auth-page-dashboard.png", alt: "Dashboard e-commerce terkait proyek" },
  { src: "/gallery/new-arrival-section.png", alt: "Grafik analitik performa proyek" },
  { src: "/gallery/products-page-dashboard.png", alt: "Dokumentasi teknis proyek" },
  { src: "/gallery/main-page-dashboard.png", alt: "Halaman artikel blog terkait proyek" },
  { src: "/gallery/transaction-page-dashboard.png", alt: "Halaman portofolio minimalis" },
  { src: "/gallery/cart-ui.png", alt: "Preview visual proyek" },
]

export function ProjectMosaic({
  id = "gallery",
  title = "Proyek Paling Berkesan",
  images = defaultImages,
  className,
}: ProjectMosaicProps) {
  // pastikan tepat 8 foto
  const pics = images.slice(0, 8).length === 8 ? images.slice(0, 8) : defaultImages

  return (
    <section id={id} aria-labelledby={`${id}-heading`} className={cn("mx-auto max-w-6xl px-4 py-12", className)}>
      <h2 id={`${id}-heading`} className="sr-only">
        {title}
      </h2>

      <div className="grid grid-cols-6 md:grid-cols-12 gap-3">
        {/* Baris 1 */}
        <div className="col-span-6 md:col-span-7 overflow-hidden rounded-lg border bg-card">
          <AspectRatio ratio={16 / 10}>
            <Image priority
              src={pics[0].src || "/placeholder.svg"}
              alt={pics[0].alt}
              className="h-full w-full object-cover"
              loading="eager"
              width={500} height={400} 
            />
          </AspectRatio>
        </div>
        <div className="col-span-6 md:col-span-5 overflow-hidden rounded-lg border bg-card">
          <AspectRatio ratio={16 / 10}>
            <Image priority src={pics[1].src || "/placeholder.svg"} alt={pics[1].alt} width={500} height={400} className="h-full w-full object-cover" />
          </AspectRatio>
        </div>

        {/* Baris 2 */}
        <div className="col-span-6 md:col-span-4 overflow-hidden rounded-lg border bg-card">
          <AspectRatio ratio={4 / 5}>
            <Image priority src={pics[2].src || "/placeholder.svg"} alt={pics[2].alt} width={500} height={400}  className="h-full w-full object-cover" />
          </AspectRatio>
        </div>
        <div className="col-span-6 md:col-span-4 overflow-hidden rounded-lg border bg-card">
          <AspectRatio ratio={4 / 5}>
            <Image priority src={pics[3].src || "/placeholder.svg"} alt={pics[3].alt} width={500} height={400}  className="h-full w-full object-cover" />
          </AspectRatio>
        </div>
        <div className="col-span-6 md:col-span-4 overflow-hidden rounded-lg border bg-card">
          <AspectRatio ratio={16 / 10}>
            <Image priority src={pics[4].src || "/placeholder.svg"} alt={pics[4].alt} width={500} height={400}  className="h-full w-full object-cover" />
          </AspectRatio>
        </div>

        {/* Baris 3 */}
        <div className="col-span-6 md:col-span-5 overflow-hidden rounded-lg border bg-card">
          <AspectRatio ratio={16 / 10}>
            <Image priority src={pics[5].src || "/placeholder.svg"} alt={pics[5].alt} width={500} height={400}  className="h-full w-full object-cover" />
          </AspectRatio>
        </div>
        <div className="col-span-3 md:col-span-3 overflow-hidden rounded-lg border bg-card">
          <AspectRatio ratio={1 / 1}>
            <Image priority src={pics[6].src || "/placeholder.svg"} alt={pics[6].alt} width={500} height={400}  className="h-full w-full object-cover" />
          </AspectRatio>
        </div>
        <div className="col-span-3 md:col-span-4 overflow-hidden rounded-lg border bg-card">
          <AspectRatio ratio={16 / 10}>
            <Image priority src={pics[7].src || "/placeholder.svg"} alt={pics[7].alt} width={500} height={400}  className="h-full w-full object-cover" />
          </AspectRatio>
        </div>
      </div>
    </section>
  )
}

export default ProjectMosaic
