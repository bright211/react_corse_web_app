import { StyledLayout } from './styles'

const Layout = ({ children }) => {
    return( <StyledLayout>
        {children}
        <style jsx global>{`
        @font-face {
          font-family: 'AvenirNext';
          src: url('/fonts/AvenirNextCyr-Light.ttf');
          font-weight: 300;
          font-style: normal;
        }

        @font-face {
          font-family: 'AvenirNext';
          src: url('/fonts/AvenirNextCyr-Regular.ttf');
          font-weight: 400;
          font-style: normal;
        }

        @font-face {
          font-family: 'AvenirNext';
          src: url('/fonts/AvenirNextCyr-Medium.ttf');
          font-weight: 500;
          font-style: normal;
        } 

        @font-face {
          font-family: 'AvenirNext';
          src: url('/fonts/AvenirNextCyr-MediumItalic.ttf');
          font-weight: 500;
          font-style: italic;
        }

        @font-face {
          font-family: 'AvenirNext';
          src: url('/fonts/AvenirNextCyr-Demi.ttf');
          font-weight: 500;
          font-style: normal;
        }

        @font-face {
          font-family: 'AvenirNext';
          src: url('/fonts/AvenirNextCyr-Bold.ttf');
          font-weight: 600;
          font-style: normal;
        }
      `}
        </style>
      </StyledLayout>)
}

export default Layout