import styled from 'styled-components'

export const UnlockContainer = styled.div`
  background-image: linear-gradient(to bottom, #0b0c1e, #3c2940);
  height: 100vh;
  background-size: cover;
  margin-top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const UnlockContentContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const LockImage = styled.img`
  height: 200px;
`
export const Text = styled.p`
  font-family: 'Roboto';
  color: white;
  font-size: 24px;
  text-align: center;
`
export const ChangeLockButton = styled.button`
  background-color: #06b6d4;
  border: none;
  padding: 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 22px;
  text-align: center;
  margin-top: 100px;
  color: white;
`
