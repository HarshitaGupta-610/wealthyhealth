const RiskBar = ({ level, value }) => {
  const getColor = () => {
    if (level === 'Low') return 'bg-green-500'
    if (level === 'Moderate') return 'bg-yellow-500'
    return 'bg-red-500'
  }

  return (
    <div className="w-full">
      <div className="flex justify-between mb-2">
        <span className="font-semibold text-wealthy-dark">{level} Risk</span>
        <span className="text-gray-600">{value}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3">
        <div
          className={`${getColor()} h-3 rounded-full transition-all duration-500`}
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </div>
  )
}

export default RiskBar
