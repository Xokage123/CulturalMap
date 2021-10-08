// Next
import Link from 'next/link';
// Styles__My
import styles from './mylink.module.scss';

interface ILinkProps {
	// Ссылка куда идет направление
	url: string;
	// То, что будет содержаться в ссылке
	content: JSX.Element;
}

export const MyLink: React.FC<ILinkProps> = (props) => {
	const { url, content } = props;
	return (
		<Link href={url} passHref>
			{content}
		</Link>
	);
};
