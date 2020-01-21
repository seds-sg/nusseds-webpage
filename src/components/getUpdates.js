import React from "react"
import { useState } from "react"
import styled from "styled-components"
import StyledButton from "../components/button"

const GetUpdates = () => {
  const [showGetUpdateBtn, setGetUpdateBtn] = useState(true)
  const [emailAddr, setEmailAddr] = useState("")

  return showGetUpdateBtn ? (
    <ButtonWrapper
      buttonText="Get Updates 🚀"
      onClick={() => setGetUpdateBtn(false)}
    />
  ) : (
    <GetUpdateContainer>
      <StyledInput
        value={emailAddr}
        onChange={event => setEmailAddr(event.target.value)}
        type="text"
        autoFocus
        placeholder="Enter your email!"
      />
      <ButtonWrapper
        buttonText="Submit!"
        onClick={async () => {
          const trimmedEmail = emailAddr.trim()
          if (trimmedEmail === "") {
            setGetUpdateBtn(true)
            setEmailAddr("")
          }
          await fetch(
            `https://maker.ifttt.com/trigger/email_sent/with/key/dREVjoEhXANwxcMY4LjYk-?value1=${trimmedEmail}`,
            {
              mode: "no-cors",
            }
          )
          setGetUpdateBtn(true)
          setEmailAddr("")
        }}
      />
    </GetUpdateContainer>
  )
}

const GetUpdateContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const StyledInput = styled.input`
  height: 2.75rem;
  width: 16rem;
  padding: 0.75rem 2rem;
  margin-right: 2rem;
  margin-bottom: 2rem;
  border: 1px solid white;
  background-color: transparent;
  color: white;
  font-family: Graebenbach Mono;
  font-weight: 400;
`

const ButtonWrapper = styled(StyledButton)`
  margin-bottom: 5rem;
  padding: 0.75rem 2rem;
`

export default GetUpdates
