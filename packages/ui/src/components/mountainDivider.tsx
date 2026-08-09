import Image from "next/image";

export default function MountainDivider() {
  return (
    <div className="relative w-full overflow-hidden leading-[0] pointer-events-none">
      <div className="w-full">
        <Image
          src="/images/divider1.png"
          alt=""
          width={2200}
          height={800}
          sizes="100vw"
          quality={80}
          className="w-full block object-contain"
          draggable={false}
        />
      </div>
    </div>
  );
}
