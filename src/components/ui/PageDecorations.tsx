import polygonDecoration from '@/assets/images/Polygon 2.svg'
import dottedDecoration from '@/assets/images/dotted.svg'

export default function PageDecorations({
  glowPosition = 'center',
}: {
  glowPosition?: 'center' | 'left'
}) {
  const glowPositionClass = glowPosition === 'left'
    ? 'left-[8rem]'
    : 'left-1/2 -translate-x-1/2'

  return (
    <>
      <div className={`pointer-events-none absolute ${glowPositionClass} top-24 z-0 h-72 w-[40rem] rounded-full bg-primary/10 blur-3xl`} />
      <img
        aria-hidden="true"
        src={polygonDecoration}
        alt=""
        className="pointer-events-none absolute -right-20 -top-20 z-0 h-[260px] w-[330px] opacity-60"
      />
      <img
        aria-hidden="true"
        src={dottedDecoration}
        alt=""
        className="pointer-events-none absolute -left-8 top-20 z-0 h-20 w-[72px] opacity-90"
      />
      <img
        aria-hidden="true"
        src={dottedDecoration}
        alt=""
        className="pointer-events-none absolute -left-12 top-[42%] z-0 h-24 w-24 opacity-90"
      />
      <img
        aria-hidden="true"
        src={dottedDecoration}
        alt=""
        className="pointer-events-none absolute -right-12 bottom-[18%] z-0 h-24 w-24 rotate-180 opacity-90"
      />
    </>
  )
}
