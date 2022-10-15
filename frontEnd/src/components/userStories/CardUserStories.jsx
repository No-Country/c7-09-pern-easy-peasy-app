export const CardUserStories = ({ image, text, name }) => {
  return (
    <div className="min-w-[212px] max-w-[212px] rounded-[30px] overflow-hidden shadow-[0_4px_10px_rgba(0,0,0,0.25)]">
      <img className="pointer-events-none" src={image} alt="" />
      <div className="p-[15px] pt-[10px]">
        {text}
        <address className="text-right text-sm font-medium leading-[22.19px]">
          <h6>{name}</h6>
        </address>
      </div>
    </div>
  )
}
