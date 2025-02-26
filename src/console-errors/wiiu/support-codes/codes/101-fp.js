const SupportCode = require('../../../common/support-code');

// TODO - Reorder these
module.exports = {
	'1999': new SupportCode('Missing name', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'9999': new SupportCode('Missing name', 'Missing description', 'An error has occurred.\n\nPlease try again later.\n\nIf the problem persists, please\nmake a note of the error code and\nvisit support.nintendo.com.', 'Missing fix', 'Missing link'),
	'0000': new SupportCode('SUCCESS', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0001': new SupportCode('SESSION_CLOSED', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0010': new SupportCode('PROGRAMMING_ERROR', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0011': new SupportCode('NOT_INITIALIZED', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0012': new SupportCode('ALREADY_INITIALIZED', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0013': new SupportCode('INVALID_ARGUMENT', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0014': new SupportCode('BUSY', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0015': new SupportCode('NETWORK_CLOCK_INVALID', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0016': new SupportCode('NOT_PERMITTED', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0100': new SupportCode('CORE_UNDEFINED', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0101': new SupportCode('CORE_RESERVED_01', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0102': new SupportCode('CORE_UNKNOWN', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0103': new SupportCode('CORE_NOT_IMPLEMENTED', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0104': new SupportCode('CORE_INVALID_POINTER', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0105': new SupportCode('CORE_OPERATION_ABORTED', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0106': new SupportCode('CORE_EXCEPTION', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0107': new SupportCode('CORE_ACCESS_DENIED', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0108': new SupportCode('CORE_INVALID_HANDLE', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0109': new SupportCode('CORE_INVALID_INDEX', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0110': new SupportCode('CORE_OUT_OF_MEMORY', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0111': new SupportCode('CORE_INVALID_ARGUMENT', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0112': new SupportCode('CORE_TIMEOUT', 'Missing description', 'Unable to connect to the server.\n\nPlease try again later.\n\nIf the problem persists, please\nmake a note of the error code and\nvisit support.nintendo.com.', 'Missing fix', 'Missing link'),
	'0113': new SupportCode('CORE_INITIALIZATION_FAILURE', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0114': new SupportCode('CORE_CALL_INITIATION_FAILURE', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0115': new SupportCode('CORE_REGISTRATION_ERROR', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0116': new SupportCode('CORE_BUFFER_OVERFLOW', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0117': new SupportCode('CORE_INVALID_LOCK_STATE', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0200': new SupportCode('DDL_UNDEFINED', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0201': new SupportCode('DDL_INVALID_SIGNATURE', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0202': new SupportCode('DDL_INCORRECT_VERSION', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0300': new SupportCode('RENDEZVOUS_UNDEFINED', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0301': new SupportCode('RENDEZVOUS_CONNECTION_FAILURE', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0302': new SupportCode('RENDEZVOUS_NOT_AUTHENTICATED', 'Missing description', 'Unable to connect to the server.\n\nPlease try again later.\n\nIf the problem persists, please\nmake a note of the error code and\nvisit support.nintendo.com.', 'Missing fix', 'Missing link'),
	'0303': new SupportCode('RENDEZVOUS_INVALID_USERNAME', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0304': new SupportCode('RENDEZVOUS_INVALID_PASSWORD', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0305': new SupportCode('RENDEZVOUS_USERNAME_ALREADY_EXISTS', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0306': new SupportCode('RENDEZVOUS_ACCOUNT_DISABLED', 'Missing description', 'This user cannot use network services.\n\nThe Nintendo Network ID linked to this\nuser has been deleted.', 'Missing fix', 'Missing link'),
	'0307': new SupportCode('RENDEZVOUS_ACCOUNT_EXPIRED', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0308': new SupportCode('RENDEZVOUS_CONCURRENT_LOGIN_DENIED', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0309': new SupportCode('RENDEZVOUS_ENCRYPTION_FAILURE', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0310': new SupportCode('RENDEZVOUS_INVALID_PID', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0311': new SupportCode('RENDEZVOUS_MAX_CONNECTIONS_REACHED', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0312': new SupportCode('RENDEZVOUS_INVALID_GID', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0313': new SupportCode('RENDEZVOUS_INVALID_THREAD_ID', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0314': new SupportCode('RENDEZVOUS_INVALID_OPERATION_IN_LIVE_ENVIRONMENT', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0315': new SupportCode('RENDEZVOUS_DUPLICATE_ENTRY', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0316': new SupportCode('RENDEZVOUS_CONTROL_SCRIPT_FAILURE', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0317': new SupportCode('RENDEZVOUS_CLASS_NOT_FOUND', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0318': new SupportCode('RENDEZVOUS_RESERVED_18', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0319': new SupportCode('RENDEZVOUS_RESERVED_19', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0320': new SupportCode('RENDEZVOUS_DDL_MISMATCH', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0321': new SupportCode('RENDEZVOUS_RESERVED_21', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0322': new SupportCode('RENDEZVOUS_RESERVED_22', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0400': new SupportCode('PYTHON_CORE_UNDEFINED', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0401': new SupportCode('PYTHON_CORE_EXCEPTION', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0402': new SupportCode('PYTHON_CORE_TYPE_ERROR', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0403': new SupportCode('PYTHON_CORE_INDEX_ERROR', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0404': new SupportCode('PYTHON_CORE_INVALID_REFERENCE', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0405': new SupportCode('PYTHON_CORE_CALL_FAILURE', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0406': new SupportCode('PYTHON_CORE_MEMORY_ERROR', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0407': new SupportCode('PYTHON_CORE_KEY_ERROR', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0408': new SupportCode('PYTHON_CORE_OPERATION_ERROR', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0409': new SupportCode('PYTHON_CORE_CONVERSION_ERROR', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0410': new SupportCode('PYTHON_CORE_VALIDATION_ERROR', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0500': new SupportCode('TRANSPORT_UNDEFINED', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0501': new SupportCode('TRANSPORT_UNKNOWN', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0502': new SupportCode('TRANSPORT_CONNECTION_FAILURE', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0503': new SupportCode('TRANSPORT_INVALID_URL', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0504': new SupportCode('TRANSPORT_INVALID_KEY', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0505': new SupportCode('TRANSPORT_INVALID_URL_TYPE', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0506': new SupportCode('TRANSPORT_DUPLICATE_ENDPOINT', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0507': new SupportCode('TRANSPORT_IO_ERROR', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0508': new SupportCode('TRANSPORT_TIMEOUT', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0509': new SupportCode('TRANSPORT_CONNECTION_RESET', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0510': new SupportCode('TRANSPORT_INCORRECT_REMOTE_AUTHENTICATION', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0511': new SupportCode('TRANSPORT_SERVER_REQUEST_ERROR', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0512': new SupportCode('TRANSPORT_DECOMPRESSION_FAILURE', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0513': new SupportCode('TRANSPORT_CONGESTED_END_POINT', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0514': new SupportCode('TRANSPORT_RESERVED_14', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0515': new SupportCode('TRANSPORT_RESERVED_15', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0516': new SupportCode('TRANSPORT_RESERVED_16', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0517': new SupportCode('TRANSPORT_RESERVED_17', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0518': new SupportCode('TRANSPORT_SOCKET_SEND_WARNING', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0519': new SupportCode('TRANSPORT_UNSUPPORTED_NAT', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0520': new SupportCode('TRANSPORT_DNS_ERROR', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0521': new SupportCode('TRANSPORT_PROXY_ERROR', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0522': new SupportCode('TRANSPORT_DATA_REMAINING', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0523': new SupportCode('TRANSPORT_NO_BUFFER', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0524': new SupportCode('TRANSPORT_NOT_FOUND', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0600': new SupportCode('DO_CORE_UNDEFINED', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0601': new SupportCode('DO_CORE_RESERVED_01', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0602': new SupportCode('DO_CORE_RESERVED_02', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0603': new SupportCode('DO_CORE_RESERVED_03', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0604': new SupportCode('DO_CORE_RESERVED_04', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0605': new SupportCode('DO_CORE_RESERVED_05', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0606': new SupportCode('DO_CORE_RESERVED_06', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0607': new SupportCode('DO_CORE_RESERVED_07', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0608': new SupportCode('DO_CORE_RESERVED_08', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0609': new SupportCode('DO_CORE_RESERVED_09', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0610': new SupportCode('DO_CORE_RESERVED_10', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0611': new SupportCode('DO_CORE_RESERVED_11', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0612': new SupportCode('DO_CORE_RESERVED_12', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0613': new SupportCode('DO_CORE_RESERVED_13', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0614': new SupportCode('DO_CORE_RESERVED_14', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0615': new SupportCode('DO_CORE_RESERVED_15', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0616': new SupportCode('DO_CORE_RESERVED_16', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0617': new SupportCode('DO_CORE_RESERVED_17', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0618': new SupportCode('DO_CORE_RESERVED_18', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0619': new SupportCode('DO_CORE_RESERVED_19', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0700': new SupportCode('FPD_UNDEFINED', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0701': new SupportCode('FPD_RESERVED_01', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0702': new SupportCode('FPD_NOT_INITIALIZED', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0703': new SupportCode('FPD_ALREADY_INITIALIZED', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0704': new SupportCode('FPD_NOT_CONNECTED', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0705': new SupportCode('FPD_CONNECTED', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0706': new SupportCode('FPD_INITIALIZATION_FAILURE', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0707': new SupportCode('FPD_OUT_OF_MEMORY', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0708': new SupportCode('FPD_RMC_FAILED', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0709': new SupportCode('FPD_INVALID_ARGUMENT', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0710': new SupportCode('FPD_RESERVED_10', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0711': new SupportCode('FPD_INVALID_PRINCIPAL_ID', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0712': new SupportCode('FPD_RESERVED_12', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0713': new SupportCode('FPD_RESERVED_13', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0714': new SupportCode('FPD_RESERVED_14', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0715': new SupportCode('FPD_RESERVED_15', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0716': new SupportCode('FPD_RESERVED_16', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0717': new SupportCode('FPD_RESERVED_17', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0718': new SupportCode('FPD_RESERVED_18', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0719': new SupportCode('FPD_RESERVED_19', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0720': new SupportCode('FPD_FILE_IO_ERROR', 'Missing description', 'An error has occurred.\n\nPlease turn off the Wii U console\nand try again.\n\nIf the problem persists, please\nmake a note of the error code and\nvisit support.nintendo.com.', 'Missing fix', 'Missing link'),
	'0721': new SupportCode('FPD_P2P_INTERNET_PROHIBITED', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0722': new SupportCode('FPD_UNKNOWN', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0723': new SupportCode('FPD_INVALID_STATE', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0724': new SupportCode('FPD_RESERVED_24', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0725': new SupportCode('FPD_ADD_FRIEND_PROHIBITED', 'Missing description', 'Friend registration has been restricted\nvia Parental Controls.', 'Missing fix', 'Missing link'),
	'0726': new SupportCode('FPD_RESERVED_26', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0727': new SupportCode('FPD_INVALID_ACCOUNT', 'Missing description', 'An error has occurred.\n\nThis user has been deleted or\nis unable to use friend features.', 'Missing fix', 'Missing link'),
	'0728': new SupportCode('FPD_BLACKLISTED_BY_ME', 'Missing description', 'This is a user you have blocked.\n\nIf you would like to make this user a\nfriend, you must first unblock the user.', 'Missing fix', 'Missing link'),
	'0729': new SupportCode('FPD_RESERVED_29', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0730': new SupportCode('FPD_FRIEND_ALREADY_ADDED', 'Missing description', 'This user is already on your friend list.', 'Missing fix', 'Missing link'),
	'0731': new SupportCode('FPD_MY_FRIEND_LIST_LIMIT_EXCEED', 'Missing description', 'Your friend list is full.\n\nYou must make space in your friend\nlist before registering new friends.', 'Missing fix', 'Missing link'),
	'0732': new SupportCode('FPD_REQUEST_LIMIT_EXCEED', 'Missing description', 'This user cannot receive any\nmore friend requests.', 'Missing fix', 'Missing link'),
	'0733': new SupportCode('FPD_INVALID_MESSAGE_ID', 'Missing description', 'This friend request is invalid.\n\nIt may have been canceled.', 'Missing fix', 'Missing link'),
	'0734': new SupportCode('FPD_MESSAGE_IS_NOT_MINE', 'Missing description', 'An error has occurred.', 'Missing fix', 'Missing link'),
	'0735': new SupportCode('FPD_MESSAGE_IS_NOT_FOR_ME', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0736': new SupportCode('FPD_FRIEND_REQUEST_BLOCKED', 'Missing description', 'This user has elected not to receive\nfriend requests.', 'Missing fix', 'Missing link'),
	'0737': new SupportCode('FPD_NOT_IN_MY_FRIEND_LIST', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0738': new SupportCode('FPD_FRIEND_LISTED_BY_ME', 'Missing description', 'You cannot block users who\nare on your friend list.', 'Missing fix', 'Missing link'),
	'0739': new SupportCode('FPD_NOT_IN_MY_BLACKLIST', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0740': new SupportCode('FPD_INCOMPATIBLE_ACCOUNT', 'Missing description', 'You cannot make this user a friend.', 'Missing fix', 'Missing link'),
	'0741': new SupportCode('FPD_BLOCK_SETTING_CHANGE_NOT_ALLOWED', 'Missing description', 'Users under the age of 13 cannot\nreceive friend requests.', 'Missing fix', 'Missing link'),
	'0742': new SupportCode('FPD_SIZE_LIMIT_EXCEEDED', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0743': new SupportCode('FPD_OPERATION_NOT_ALLOWED', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0744': new SupportCode('FPD_NOT_NETWORK_ACCOUNT', 'Missing description', 'There is no Nintendo Network ID\nlinked with the current user.', 'Missing fix', 'Missing link'),
	'0745': new SupportCode('FPD_NOTIFICATION_NOT_FOUND', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0746': new SupportCode('FPD_PREFERENCE_NOT_INITIALIZED', 'Missing description', 'Your friend list hasn\'t been set up yet.\n\nPlease open your friend list from\nthe HOME Menu and set it up.', 'Missing fix', 'Missing link'),
	'0747': new SupportCode('FPD_FRIEND_REQUEST_NOT_ALLOWED', 'Missing description', 'Users under the age of 13\ncannot send friend requests.', 'Missing fix', 'Missing link'),
	'0800': new SupportCode('AUTHENTICATION_UNDEFINED', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0801': new SupportCode('AUTHENTICATION_ACCOUNT_LIBRARY_ERROR', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0802': new SupportCode('AUTHENTICATION_TOKEN_PARSE_ERROR', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0803': new SupportCode('AUTHENTICATION_RESERVED_03', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0804': new SupportCode('AUTHENTICATION_RESERVED_04', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0805': new SupportCode('AUTHENTICATION_RESERVED_05', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0806': new SupportCode('AUTHENTICATION_TOKEN_EXPIRED', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0807': new SupportCode('AUTHENTICATION_VALIDATION_FAILED', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0808': new SupportCode('AUTHENTICATION_INVALID_PARAM', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0809': new SupportCode('AUTHENTICATION_PRINCIPAL_ID_UNMATCHED', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0810': new SupportCode('AUTHENTICATION_RESERVED_10', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0811': new SupportCode('AUTHENTICATION_UNDER_MAINTENANCE', 'Missing description', 'Due to server maintenance, the service\nyou attempted to access is not available\nat this time.\n\nPlease try again later.', 'Missing fix', 'Missing link'),
	'0812': new SupportCode('AUTHENTICATION_UNSUPPORTED_VERSION', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
	'0813': new SupportCode('AUTHENTICATION_UNKNOWN', 'Missing description', 'Missing message', 'Missing fix', 'Missing link'),
};