// Components
import { useCallback } from 'react';
import { MyList } from '..';
// Interface
import type { IPersonContent } from 'interfaces/interface/person';
// Styles__My
import styles from './listcontent.module.scss';

interface IListContent {
	elements: Array<IPersonContent>;
}

export const ListContent: React.FC<IListContent> = (props) => {
	const { elements } = props;
	const content = useCallback((infoContent: IPersonContent) => {
		switch (infoContent.type) {
			case 'video':
				return (
					<iframe
						width="560"
						height="315"
						src={infoContent.url}
						title="YouTube video player"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					></iframe>
				);
				break;
			case 'article':
				return <div>Пока в разработке</div>;
				break;
			default:
				return <div>Ошибка. Данные не доступны</div>;
				break;
		}
	}, []);
	return (
		<MyList
			styleList={{}}
			styleItem={{}}
			elements={elements}
			functionCreateContent={content}
		/>
	);
};
