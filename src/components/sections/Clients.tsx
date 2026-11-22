import Container from '@/components/ui/Container'
import clientsImage from '@/assets/images/clients.jpg'

export default function Clients() {
  return (
    <section className="border-y border-neutral/15 bg-white py-10">
      <Container>
        <p className="text-center text-[10px] uppercase tracking-wide text-muted">
          32+ software solutions delivered, helping businesses move forward.
        </p>
        <img
          src={clientsImage}
          alt="Our clients: OpenZeppelin, Oracle, Samsung, monday.com, Daraz, Morpheus, and fuse machines"
          className="mx-auto mt-6 h-auto w-full max-w-[1142px]"
        />
      </Container>
    </section>
  )
}
