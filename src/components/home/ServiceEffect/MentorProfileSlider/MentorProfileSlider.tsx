import { useMediaQuery } from 'react-responsive'
import { getSliderSettings } from '@/utils/getSliderSettings'
import Slider from 'react-slick'
import { mentorList } from '@/utils/constants/mentorList'
import MentorProfile from '../MentorProfile/MentorProfile'
import * as S from './MentorProfileSlider.styled'

const MentorProfileSlider = () => {
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1024px)' })
  const sliderSettings = getSliderSettings(isDesktopOrLaptop)

  return (
    <S.SliderContainer>
      <Slider {...sliderSettings}>
        {mentorList.map(({ id, image, company, job, specList }) => (
          <div key={id}>
            <MentorProfile {...{ image, company, job, specList }} />
          </div>
        ))}
      </Slider>
    </S.SliderContainer>
  )
}
export default MentorProfileSlider
