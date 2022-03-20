import { useState } from 'react';
import { t } from 'i18n-js';
import { IconSvg, Text, Box, EmptyState, GenericModal, NoticeLoader } from 'components/primitive';
import {
  NotificationsContainer,
  BackButtonContainer,
  Notifications,
  Activities,
  StyledButton,
  StyledDiv,
  StyledImage,
  WalletName,
} from './notifications.screen.styles';
import { useStores } from 'store';
import { useServices } from 'services';
import { useHistory } from 'react-router-dom';


export const NotificationsScreen: React.FC = () => {

  const history = useHistory();
  const { safeStore } = useStores();
  const { safeService } = useServices();
  const [ confirm, setConfirm ] = useState(false);
  const [ canceling, setCanceling ] = useState(false);


  const handleCancelClaim = async() => {
    
    setConfirm(false);
    setCanceling(true);
    await safeService.signal(safeStore.safe?._id!);
    setCanceling(false);

  }

  const backButtonHandler = () => {
    history.goBack();
  };
  

  return (
    <NotificationsContainer>
      {confirm && <GenericModal show={confirm} onSubmit={handleCancelClaim} onClose={()=>{setConfirm(false)}}> 
         <StyledDiv>
        <StyledImage name='warningIndicator' />
        <Text variant='small' tx='notifications.cancelConfirm' color='textLighter' center />
      </StyledDiv>
      </GenericModal>
      }

      { canceling && (
        <NoticeLoader
          label={{ tx: "walletClaimPage.claiming" }}
          helperText={{
            text: 'Canceling the claim. Please wait for the transaction to get confirmed...',
          }}
        />
      )}
      <Box marginTop={2} onClick={() => (window.location.href = safeStore.safe?.cid!)}>
            <WalletName variant='title' text={safeStore.safe?.safeName} color='textLight' />
      </Box>
      <Notifications>
        <BackButtonContainer onClick={backButtonHandler}>
          <IconSvg name='arrowLeft' />
        </BackButtonContainer>
        <Text variant='contentHeader' center tx='notifications.notification' />
        <Box marginTop={3.2}>
          {
          safeStore.safe?.claims.length ? safeStore.safe?.claims.map((claim)=>
          <Activities>
            <IconSvg name='document' size='xLarge' />

            <Box>
              <Text variant='small' tx='notifications.claimingText' color='textLight' />
              <Text variant='small' text='2 days left to respond' color='textLighter' />
            </Box>

            <StyledButton row hCenter vCenter gap={0.4} color='applicationBackground' onClick={() => {setConfirm(true)}}>
              <IconSvg name='delete' />
              {t('notifications.cancelClaim')}
            </StyledButton>
          </Activities>) :
          <EmptyState label={{ tx: 'emptyStates.emptyActivities' }} image={{ name: 'emptyActivity' }} />
          }

        </Box>
      </Notifications>
    </NotificationsContainer>
  );
};
