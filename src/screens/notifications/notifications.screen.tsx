import { t } from 'i18n-js';
import { IconSvg, Text, Box } from 'components/primitive';
import {
  NotificationsContainer,
  BackButtonContainer,
  Notifications,
  Activities,
  StyledButton,
} from './notifications.screen.styles';

export const NotificationsScreen = () => {
  return (
    <NotificationsContainer>
      <Text variant='contentHeader' left text='Wallet 1' />
      <Notifications>
        <BackButtonContainer>
          <IconSvg name='arrowLeft' />
        </BackButtonContainer>
        <Text variant='contentHeader' center text='Notifications' />
        <Box marginTop={3.2}>
          <Activities>
            <IconSvg name='document' size='xLarge' />

            <Box>
              <Text variant='small' text='Someone is claiming your wallet' color='textLight' />
              <Text variant='small' text='2 days left to respond' color='textLighter' />
            </Box>

            <StyledButton row hCenter vCenter gap={0.4} color='applicationBackground'>
              <IconSvg name='delete' />
              Cancel Claim
            </StyledButton>
          </Activities>{' '}
          <Activities>
            <IconSvg name='document' size='xLarge' />

            <Box>
              <Text variant='small' text='Someone is claiming your wallet' color='textLight' />
              <Text variant='small' text='2 days left to respond' color='textLighter' />
            </Box>

            <StyledButton row hCenter vCenter gap={0.4} color='applicationBackground'>
              <IconSvg name='delete' />
              Cancel Claim
            </StyledButton>
          </Activities>{' '}
          <Activities>
            <IconSvg name='document' size='xLarge' />

            <Box>
              <Text variant='small' text='Someone is claiming your wallet' color='textLight' />
              <Text variant='small' text='2 days left to respond' color='textLighter' />
            </Box>

            <StyledButton row hCenter vCenter gap={0.4} color='applicationBackground'>
              <IconSvg name='delete' />
              Cancel Claim
            </StyledButton>
          </Activities>{' '}
          <Activities>
            <IconSvg name='document' size='xLarge' />

            <Box>
              <Text variant='small' text='Someone is claiming your wallet' color='textLight' />
              <Text variant='small' text='2 days left to respond' color='textLighter' />
            </Box>

            <StyledButton row hCenter vCenter gap={0.4} color='applicationBackground'>
              <IconSvg name='delete' />
              Cancel Claim
            </StyledButton>
          </Activities>{' '}
        </Box>
      </Notifications>
    </NotificationsContainer>
  );
};
