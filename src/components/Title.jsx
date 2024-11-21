export default function Title({ text, center = true, color ='#F1692F', width = '242px' }) {
  return (
    <div style={{ color }} className={`text-[${color}] text-[32px] font-bold w-fit space-y-1 ${center ? 'mx-auto text-center' : ''}`}>
      <h2 className="inline-block">{text}</h2>
      <div style={{ backgroundColor: color, width }} className={`h-2 bg-[${color}] rounded-full max-w-[${width}] ${center ? 'mx-auto' : ''}`}></div>
    </div>
  )
}