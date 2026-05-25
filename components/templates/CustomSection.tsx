import { ArrowRightCircle } from "lucide-react";
import Image from "next/image";

export default function CustomSection() {
  return (
    <section className="my-8">
      <h3 className="text-lg md:text-2xl mb-4">
        popular home in hurghada <ArrowRightCircle className="inline" />
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-4">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item}>
            <div className="aspect-square rounded-4xl bg-input shadow-xl mb-2" />
            <div className="px-2">
              <p className="text-sm md:text-lg capitalize">title</p>
              <p className="text-muted-foreground text-xs md:text-sm">
                details <span>5.0</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
