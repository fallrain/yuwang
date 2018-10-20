
var wx_icon = document.getElementById('wx_icon'),
	 		wx_copy = document.getElementById('wx_copy'),
	 		close_wx = document.getElementById('close_wx'),
			copy_num = document.getElementById('copy_num'),
			wx_num = document.getElementById('wx_num');

			wx_icon.onclick = function()
			{
				this.style.display = 'none';
				wx_copy.style.display = 'block';
			};
			close_wx.onclick = function()
			{
				wx_copy.style.display = 'none';
				wx_icon.style.display = 'block';
			};