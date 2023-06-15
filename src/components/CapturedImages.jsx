import CapturedImage from "./CapturedImage"

const CapturedImages = ({ images }) => {
  return (
    <section className="flex flex-col items-center my-8">
      <h2 className="text-white text-2xl font-bold mb-4">
        Captured Images
      </h2>
      <div>
        <ul>
          {images.forEach(image => {
            <CapturedImage
              key={img}
              image={image}
            />
          })}
        </ul>
      </div>
    </section>
  )
}

export default CapturedImages