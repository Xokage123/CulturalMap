// Next
import Image from 'next/image';
// React
import uuid from 'react-uuid';
// Styles__My
import styles from './myswiper.module.scss';
// Styles__React-Bootsrap
import { Carousel } from 'react-bootstrap';

interface ISwiperProps {
	photos: Array<StaticImageData>;
}

export const MySwiper: React.FC<ISwiperProps> = (props) => {
	const { photos } = props;
	return (
		<Carousel
			style={{
				maxWidth: '300px',
			}}
			indicators={false}
			controls={false}
			fade={false}
		>
			{photos.map((photo) => {
				return (
					<Carousel.Item key={uuid()}>
						<Image
							height={300}
							width={300}
							className="d-block w-100"
							src={photo}
							alt="First slide"
						/>
					</Carousel.Item>
				);
			})}
		</Carousel>
	);
};
