const FeatureBox = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-wealthy-dark mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

export default FeatureBox
