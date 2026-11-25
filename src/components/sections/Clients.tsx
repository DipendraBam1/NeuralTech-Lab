import Container from '@/components/ui/Container'
import clientsImage from '@/assets/images/clients.jpg'
import clientsDarkImage from '@/assets/images/clients-dark.svg'

export default function Clients() {
  return (
    <section id="clients" className="border-y border-neutral/15 dark:border-dark-border bg-neutral/5 dark:bg-dark-bg py-10">
      <Container>
        <p className="text-center text-[10px] uppercase tracking-wide text-muted dark:text-dark-muted">
          32+ software solutions delivered, helping businesses move forward.
        </p>
        <img
          src={clientsImage}
          alt="Our clients: OpenZeppelin, Oracle, Samsung, monday.com, Daraz, Morpheus, and fuse machines"
          className="mx-auto mt-6 h-auto w-full max-w-[1142px] dark:hidden"
        />
        <img
          src={clientsDarkImage}
          alt="Our clients: OpenZeppelin, Oracle, Samsung, monday.com, Daraz, Morpheus, and fuse machines"
          className="mx-auto mt-6 hidden h-auto w-full max-w-[1142px] dark:block"
        />
      </Container>
    </section>
  )
}
