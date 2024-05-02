import { Loader, Modal, Stack } from '@mantine/core'
import { useState } from 'react'
import classes from './JokeModal.module.css'
import { IMG_MEME } from '@/configs'
import JokeModalSetup from './JokeModalSetup'
import JokeModalPunchline from './JokeModalPunchline'
import { useAppContext } from '@/containers'
import { useJokeQuery } from '@/data/queries'
/**
 * Renders a modal component that displays a joke.
 *
 * @param {JokeModalProps} joke - The joke to be displayed.
 * @param {boolean} loading - Indicates whether the joke is currently being loaded.
 * @return {JSX.Element | undefined} The rendered modal component.
 */
export default function JokeModal() {
  const { opened, openModal, navigateFromRoot, currentId, filter } = useAppContext()
  const { joke, isRefetching } = useJokeQuery(currentId, filter.type)
  const [isQuestion, showQuestion] = useState<boolean>(true)
  const [jokeMeme, setJokeMeme] = useState(IMG_MEME[Math.floor(Math.random() * 6)])

  const resetQuestion = () => {
    setTimeout(() => {
      showQuestion(true)
      setJokeMeme(IMG_MEME[Math.floor(Math.random() * 6)])
      navigateFromRoot()
    }, 300)
  }

  const handleOnClose = () => {
    openModal(false, resetQuestion)
  }

  if (!joke) return undefined

  return (
    <Modal
      classNames={{ title: classes.title }}
      opened={opened}
      centered
      onClose={handleOnClose}
      transitionProps={{ transition: 'rotate-right', duration: 300, timingFunction: 'linear' }}>
      {isRefetching ? (
        <Stack align="center" w="100%">
          <Loader h={60} color="gray" />
        </Stack>
      ) : (
        <>
          {isQuestion ? (
            <JokeModalSetup setup={joke.setup} onClick={() => showQuestion(false)} />
          ) : (
            <JokeModalPunchline punchline={joke.punchline} jokeMeme={jokeMeme} />
          )}
        </>
      )}
    </Modal>
  )
}
