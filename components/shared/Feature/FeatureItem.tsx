import Image from "next/image"

interface FeatureItemProps {
    key: string
    title: string
    description: string
    icon: string
}

const FeatureItem = ({key, title, description, icon}: FeatureItemProps) => {
  return (
    <div key={key} className="w-full flex flex-1 flex-col items-start gap-2">
        <div className="p-3 rounded-full bg-green-500">
            <Image src={icon} alt={title} width={25} height={25} />
        </div>
        <h2 className="text-primary font-bold text-lg sm:text-xl capitalize">{title}</h2>
        <p className="text-sm sm:text-base text-primary/60 lg:mt-8 bg-white/80 lg:bg-none">{description}</p>
    </div>
  )
}

export default FeatureItem