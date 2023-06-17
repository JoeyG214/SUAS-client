import CapturedImage from "./CapturedImage"

const CapturedImages = ({ images }) => {
  return (
    <section className="flex flex-col items-center my-8">
      <h2 className="text-white text-2xl font-bold mb-4">
        Captured Images
      </h2>
      <div>
        {images.map(image => (
          <CapturedImage
            key={image}
            image={image}
          />
        ))}
      </div>
    </section>
  )
}

export default CapturedImages