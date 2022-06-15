const initState = {
	loggedUser: {
		id: 2,
		bio: "This is a bio. I can put anything here. Gotta be respectful tho",
		name: "John Doe",
		username: "longjonsilver",
		password: "1234",
		user_img: "m2",
		bg_color: "green",
	},
	menuIsOpen: false,
	users: [
		{
			id: 1,
			bio: "The very best.",
			pronouns: "He/Him",
			name: "Daniel Thompson",
			username: "danboy",
			password: "password",
			user_img: "m1",
			bg_color: "red",
		},
		{
			id: 2,
			bio: "This is a bio. I can put anything here. Gotta be respectful tho",
			name: "John Doe",
			username: "longjonsilver",
			password: "1234",
			user_img: "m2",
			bg_color: "green",
		},
		{ id: 3, name: "Kelsey J", username: "k_sheesh", password: "gggg", user_img: "f3", bg_color: "yellow" },
	],
	posts: [
		{ id: 1, content: "What a cool site. Just missing some friends!", created: 1604322329404, added_by: 1, likes: [] },
		{ id: 2, content: "I love pikachu!", created: 1649163929404, added_by: 2, likes: [1] },
		{ id: 3, content: "Old pokemon are the best!", created: 1647003929404, added_by: 1, likes: [2] },
		{ id: 4, content: "Daniel is so cool", created: 1655179597085, added_by: 3, likes: [] },
	],
	reviews: [
		{ id: 1, content: "What an over rated piece of garbage!!", rating: 3, created: 1655158527085, added_by: 1, pkmn: 6, likes: [] },
		{ id: 2, content: "Mega evolution made him cool again", rating: 9, created: 1633439194661, added_by: 2, pkmn: 6, likes: [] },
		{ id: 3, content: "Bulba is great!", rating: 6, created: 1633439233667, added_by: 1, pkmn: 1, likes: [] },
		{ id: 4, content: "Best Middle Evo.This should be enough", rating: 8, created: 1638709633667, added_by: 1, pkmn: 8, likes: [] },
		{ id: 5, content: "big C H O N K", rating: 10, created: 1633439233667, added_by: 1, pkmn: 3, likes: [] },
	],
	teams: [
		{ id: 1, name: "Genwunners", members: [25, 3, 6, 9, 143, 131], likes: [2], added_by: 1, created: 1654279977000 },
		{ id: 2, name: "Blue Balls", members: [18, 65, 112, 103, 130, 6], likes: [], added_by: 2, created: 1635000000000 },
		{ id: 3, name: "Try Hards", members: [442, 407, 423, 445, 448, 350], likes: [], added_by: 2, created: 1533219944000 },
		{ id: 4, name: "Cutie Patooties", members: [184, 547, 423, 443, 447, 350], likes: [], added_by: 3, created: 1655171111085 },
	],
	replies: [
		{ id: 1, content: "Wow son you a big ass hater", created: 1649163929404, added_by: 2, for: "review", forId: 1, likes: [] },
		{ id: 2, content: "It's not even the best Kanto starter.", created: 1651892729404, added_by: 1, for: "review", forId: 1, likes: [] },
		{
			id: 3,
			content: "Yeah right before they snatched it away one gen later lmaoo",
			created: 1651201529404,
			added_by: 1,
			for: "review",
			forId: 2,
			likes: [],
		},
		{ id: 4, content: "Agreed!!!", created: 1651801529404, added_by: 2, for: "post", forId: 3, likes: [] },
		{ id: 5, content: "We can be friends!", created: 1651801009404, added_by: 2, for: "post", forId: 1, likes: [] },
		{
			id: "b7825e56-078f-4652-be34-af373c8e9c7a",
			content: "guys. please. they all suck",
			created: 1655168868922,
			added_by: 3,
			for: "review",
			forId: 1,
			likes: [],
		},
	],
}

function reducer(state = initState, action) {
	switch (action.type) {
		case "users/ON_LOGIN":
			return {
				...state,
				loggedUser: {
					...action.logUser[0],
				},
			}
		case "users/ON_LOGOUT":
			return {
				...state,
				loggedUser: false,
			}
		case "users/REGISTER":
			return {
				...state,
				loggedUser: { ...action.newUser },
				users: [...state.users, action.newUser],
			}
		case "users/MENU_TOGGLE":
			return {
				...state,
				menuIsOpen: !state.menuIsOpen,
			}
		case "post/CREATE":
			return {
				...state,
				posts: [...state.posts, action.newPost],
			}
		case "review/CREATE":
			return {
				...state,
				reviews: [...state.reviews, action.newReview],
			}
		case "reply/CREATE":
			return {
				...state,
				replies: [...state.replies, action.newReply],
			}
		default:
			return state
	}
}

export default reducer
