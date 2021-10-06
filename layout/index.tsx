import { StrictMode } from 'react';

// Components
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

// Styles
import styles from './main.module.scss';

interface ILauoutProps {
	children?: React.ReactNode;
}

const MainLayout: React.FC<ILauoutProps> = (props) => {
	const { children } = props;
	return (
		<StrictMode>
			<Header />
			<main className={styles.Main}>
				<div className="main-container">{children}</div>
			</main>
			<Footer />
		</StrictMode>
	);
};

export default MainLayout;
