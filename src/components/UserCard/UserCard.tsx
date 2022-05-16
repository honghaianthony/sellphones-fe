import React from 'react';
import {
	Avatar,
	Row,
	Col,
	Text,
	Button,
	Spacer,
	Grid,
} from '@nextui-org/react';

export const UserCard = ({
	avatarUrl,
	avatarProps,
	css,
	onClick,
	...props
}: any) => {
	const [following, setFollowing] = React.useState(false);

	return (
		<Grid.Container
			className="user-twitter-card__container"
			css={{
				mw: '250px',
				borderRadius: '$lg',
				padding: '$sm',
				...css,
			}}
			onClick={onClick}
			{...props}
		>
			<Row justify="space-between" align="center">
				<Col span={3}>
					<Avatar
						size="lg"
						src="/images/product/avatar.png"
						color="gradient"
						bordered
						squared
						{...avatarProps}
					/>
				</Col>
				<Col span={9}>
					<Row>
						<Grid xs={12} direction="column">
							<Text className="user-twitter-card__text" b size={15}>
								Đặng Ngô Hồng Hải
							</Text>
							<Text
								className="user-twitter-card__text"
								size={14}
								css={{ mt: '-$3' }}
								color="#888888"
							>
								@anthony.haidang
							</Text>
						</Grid>
						<Button
							auto
							rounded
							onClick={() => setFollowing(!following)}
							css={{
								maxHeight: '$space$12',
								fs: '$tiny',
								fontWeight: '$semibold',
								borderColor: following ? '$foreground' : '$primary',
								color: following ? '$foreground' : '$white',
							}}
							color="primary"
							bordered={following}
						>
							{following ? 'Unfollow' : 'Follow'}
						</Button>
					</Row>
				</Col>
			</Row>
			<Grid.Container className="user-twitter-card__username-container">
				<Grid xs={12}>
					<Text
						className="user-twitter-card__text"
						size={14}
						css={{ mt: '$1' }}
						color="#888888"
					>
						Front-end developer, Khách hàng 🎉
					</Text>
				</Grid>
			</Grid.Container>

			<Grid.Container
				className="user-twitter-card__metrics-container"
				justify="flex-start"
				alignContent="center"
			>
				<Text className="user-twitter-card__text" size={14} color="#888888">
					<Text
						b
						color="foreground"
						className="user-twitter-card__text"
						size={14}
						css={{ mr: '$1' }}
					>
						4
					</Text>
					Đang Theo dõi
				</Text>
				<Spacer inline x={0.5} />
				<Text className="user-twitter-card__text" size={14} color="#888888">
					<Text
						b
						color="foreground"
						className="user-twitter-card__text"
						size={14}
						css={{ mr: '$1' }}
					>
						97.1K
					</Text>
					Theo dõi
				</Text>
			</Grid.Container>
		</Grid.Container>
	);
};
