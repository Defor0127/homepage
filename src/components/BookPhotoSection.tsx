import Image from "next/image";

export default function BookPhotoSection() {
  return (
    <section className="w-full">
      <div className="relative w-full overflow-hidden aspect-[3/2] md:aspect-auto md:h-[400px]">
        <Image
          src="/image/book.png"
          alt="Sky 카드와 유리구슬"
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
      </div>
    </section>
  );
}
