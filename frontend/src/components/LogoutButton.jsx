import { BiLogOut } from "react-icons/bi";
import useLogout from "../hooks/useLogout";
import { useAuthContext } from "../context/AuthContext";


const LogoutButton = () => {
	const { loading, logout } = useLogout();
	const {authUser} = useAuthContext()

	return (
		<div className='mt-auto'>
			{!loading ? ( 
				<>
				<BiLogOut className='w-6 h-6 text-white cursor-pointer' onClick={logout} />
				<span>{authUser.name}</span>
				</>
			) : (
				<span className='loading loading-spinner'></span>
			)}
		</div>
	);
};
export default LogoutButton;