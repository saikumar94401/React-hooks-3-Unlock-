import {useState} from 'react'
import {
  UnlockContainer,
  UnlockContentContainer,
  LockImage,
  Text,
  ChangeLockButton,
} from './styledComponents'

const Unlock = () => {
  const [locked, changeLock] = useState(true)
  const imageUrl = locked
    ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png '
  const imageAlt = locked ? 'lock' : 'unlock'
  const text = locked ? 'Locked' : 'Unlocked'
  const buttonText = locked ? 'Unlock' : 'Lock'

  const changeLockState = () => {
    changeLock(prev => !prev)
  }

  return (
    <UnlockContainer>
      <UnlockContentContainer>
        <LockImage src={imageUrl} alt={imageAlt} />
        <Text>Your Device is {text}</Text>
        <ChangeLockButton type="button" onClick={changeLockState}>
          {buttonText}
        </ChangeLockButton>
      </UnlockContentContainer>
    </UnlockContainer>
  )
}

export default Unlock
