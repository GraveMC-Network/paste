import { useCallback, useState } from 'react';
import styled from 'styled-components';
import Button from './Button.tsx';

const CloseButton = ({
  setVisible,
}: {
  setVisible: (show: boolean) => void;
}) => {
  const close = useCallback(() => {
    setVisible(false);
  }, [setVisible]);
  return (
    <div
      style={{
        position: 'absolute',
        top: '5px',
        right: '5px',
      }}
    >
      <Button style={{ padding: '5px' }} onClick={close}>
        [X]
      </Button>
    </div>
  );
};

export default function About({
  setVisible,
}: {
  setVisible: (show: boolean) => void;
}) {
  const [showTos, setShowTos] = useState<boolean>(false);

  if (showTos) {
    return <Tos setVisible={setShowTos} />;
  }

  return (
    <AboutPanel>
      <CloseButton setVisible={setVisible} />
      <BannerContainer>
        <Banner>GraveMC Paste</Banner>
      </BannerContainer>
      <p>
        <b>paste.gravemc.net is the official tool for uploading, sharing, and diagnosing logs, configs, and errors across the GraveMC network.</b>
      </p>
      <p>
        Built for the GraveMC community, it's the easiest way to share your logs with staff or friends for troubleshooting.
      </p>
      <p>
        Part of the GraveMC project — online since 2023 and powered by our players.
      </p>
      <p style={{ textAlign: 'center' }}>
        &copy; 2023-2025 GraveMC. Not affiliated with Mojang.
      </p>
    </AboutPanel>
  );
}

const Tos = ({ setVisible }: { setVisible: (show: boolean) => void }) => {
  return (
    <AboutPanel>
      <CloseButton setVisible={setVisible} />
      <h1>Terms of Service</h1>
      <p>
        Welcome to paste.gravemc.net. By using this service, you agree to the following
        terms:
      </p>
      <ol>
        <li>
          <b>No Illegal Use:</b> You may not use paste.gravemc.net to share, store, or
          distribute any content that is illegal, harmful, or violates any laws
          or regulations.
        </li>
        <li>
          <b>No Malicious Content:</b> Do not upload or share content intended
          to harm others, including but not limited to malware, phishing links,
          or personal data without consent.
        </li>
        <li>
          <b>Content Responsibility:</b> You are solely responsible for the
          content you post. We do not review content and are not liable for what
          users choose to share.
        </li>
        <li>
          <b>Moderation:</b> We reserve the right to remove any content at our
          discretion, and to restrict or terminate access to the service for
          abuse or violations of these terms.
        </li>
        <li>
          <b>No Guarantees:</b> This service is provided "as is" with no
          warranties. We do not guarantee uptime, data retention, or
          availability.
        </li>
      </ol>
      <p>
        By using paste.gravemc.net, you accept these terms. If you do not agree, please
        do not use the service.
      </p>
      <p>
        <b>Reporting Abuse</b>
        <br />
        If you encounter illegal or malicious content, please report it to the GraveMC staff.
      </p>
    </AboutPanel>
  );
};

const AboutPanel = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
  padding: 10px;
  max-width: 650px;
  max-height: 100vh;
  overflow-y: auto;

  color: ${props => props.theme.primary};
  background-color: ${props => props.theme.secondary};
`;

const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Banner = styled.div`
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.logo};
  border-radius: 20px;
  font-size: 70px;
  letter-spacing: -5px;
  padding: 10px;
  font-weight: bold;
`;
