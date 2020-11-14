# PHP OOP
---

Lập trình hướng đối tượng có 4 tính chất chính:

- Tính trìu tượng (abstraction).
- Tính kế thừa (inheritance).
- Tính đóng gói (encapsulation).
- Tính đa hình (polymorphism).

## Tính trừu tượng (abstraction)

> Trừu tượng hóa là quá trình đơn giản hóa một đối tượng mà trong đó chỉ bao gồm những đặc điểm quan tâm và bỏ qua những đặc điểm chi tiết nhỏ. Quá trình trừu tượng hóa dữ liệu giúp ta xác định được những thuộc tính, hành động nào của đối tượng cần thiết sử dụng cho chương trình.

### Abstract class

> Lớp **Abstract** sẽ định nghĩa các phương thức (hàm) mà từ đó các lớp con sẽ kế thừa nó và **Overwrite** lại (tính đa hình).

Đối với lớp này thì nó sẽ có các điểm khác sau:

- Các phương thức ( hàm ) khi được khai báo là abstract thì chỉ được định nghĩa chứ không được phép viết code xử lý trong phương thức.
- Trong abstract class nếu không phải là phương thức abstract thì vẫn khai báo và viết code được như bình thường.
- Phương thức abstract chỉ có thể khai báo trong abstract class.
- Các thuộc tính trong abstract class thì không được khai báo là abstract.
- Không thể khởi tạo một abstract class.
- Vì không thể khởi tạo được abstract class nên các phương thức được khai báo là abstract chỉ được khai báo ở mức độ protected và public.
- Các lớp kế thừa một abstract class phải định nghĩa lại tất cả các phương thức trong abstract class đó ( nếu không sẽ bị lỗi).
- Lớp trừu tượng đơn giản được xem như một class cha cho tất cả các Class có cùng bản chất.
- Do đó mỗi lớp dẫn xuất (lớp con) chỉ có thể kế thừa từ một lớp trừu tượng bằng từ khóa extends.
- Lớp con kế thừa từ lớp trừu tượng có thể override các phương thức trừu tượng trong đó.
- Lớp trừu tượng có thể khai báo các thuộc tính và các phương thức bình thường và không có thuộc tính trừu tượng (lớp trừu tượng không cho phép khởi tạo tham số, chỉ khai báo mà thôi).
- Bên cạnh đó nó không cho phép tạo instance, nghĩa là sẽ không thể tạo được các đối tượng thuộc lớp đó. Ví dụ Animal là 1 class trừu tượng thì không thể khai báo : $animal = new Animal
- Các phương thức được định nghĩa là abstract trong abstract class thì chỉ khai báo tên hàm và không viết nội dung hàm trong đó. Nội dung sẻ được viết trong class kế thừa khi override lại phương thức đó.

### Interface

> **Interface** trong hướng đối tượng là một khuôn mẫu, giúp cho chúng ta tạo ra bộ khung cho một hoặc nhiều đối tượng và nhìn vào interface thì chúng ta hoàn toàn có thể xác định được các phương thức và các thuộc tính cố định (hay còn gọi là hằng) sẽ có trong đối tượng implement nó.

Tính chất của interface:

- Interface không phải là 1 lớp. Nó được mô tả như là 1 bản thiết kế cho các class có chung cách thức hoạt động.
- Vì không phải là 1 lớp nên không thể định nghĩa các thuộc tính, khởi tạo đối tượng mà chỉ khai báo các phương thức.
- Các phương thức chỉ khai báo tên hàm và không viết nội dung hàm trong đó.
- Không có khái niệm phạm vi của phương thức, tất cả đều là public.
- Lớp con kế thừa từ interface sẻ phải override tất cả các phương thức trong đó.
- Một lớp có thể kế thừa từ nhiều interface khác nhau bằng từ khóa implements
- Interface không phải là một đối tượng.
- Trong interface chúng ta chỉ được khai báo phương thức chứ không được định nghĩa chúng.
- Trong interface chúng ta có thể khai báo được hằng nhưng không thể khai báo biến.
- Một interface không thể khởi tạo được (vì nó không phải là một đối tượng).
- Các lớp implement interface thì phải khai báo và định nghĩa lại các phương thức có trong interface đó.
- Một class có thể implements nhiều interface.
- Các interface có thể kế thừa lẫn nhau.

### Khi nào dùng interface và khi nào dùng Abstract Class

> Về bản chất thì abstract class là 1 class nên nó có thể khai báo thêm các thuộc tính và phương thức khác không phải trừu tượng. Nó được xem như "bản thiết kế" cho class vì những class extends lại từ nó ngoài override lại các phương thức trừu tượng của nó thì còn có thể sử dụng các thuộc tính của nó.

> Interface không phải là class nên chỉ dùng để khai báo các phương thức. Nó được xem như "bản thiết kế" cho method vì những class implements lại nó đều phải override lại các phương thức của nó.

Kết luận:

- Abstract thường được sử dụng trong trường hợp các class kế thừa từ nó có cùng bản chất (thuộc 1 nhóm đối tượng)
- Interface thường được sử dụng trong trường hợp các class kế thừa không có cùng bản chất (nhóm đối tượng) nhưng chúng có thể thực hiện các hành động giống nhau.

## Tính kế thừa (inheritance)

> Tính kế thừa trong lập trình hướng đối tượng cho phép một lớp (class) có thể kế thừa các thuộc tính và phương thức từ các lớp khác đã được định nghĩa. Lớp được kế thừa còn được gọi là lớp cha và lớp kế thừa được gọi là lớp con.

> Điều này cho phép các đối tượng có thể tái sử dụng hay mở rộng các đặc tính sẵn có mà không phải tiến hành định nghĩa lại.

## Tính đóng gói (encapsulation)

> Tính đóng gói là tính chất không cho phép người dùng hay đối tượng khác thay đổi dữ liệu thành viên của đối tượng nội tại. Chỉ có các hàm thành viên của đối tượng đó mới có quyền thay đổi trạng thái nội tại của nó mà thôi. Các đối tượng khác muốn thay đổi thuộc tính thành viên của đối tượng nội tại, thì chúng cần truyền thông điệp cho đối tượng, và việc quyết định thay đổi hay không vẫn do đối tượng nội tại quyết định. Trong PHP việc đóng gói được thực hiện nhờ sử dụng các từ khoá **public**, **private** và **protected**

## Tính đa hình (polymorphism)

> Tính đa hình trong lập trình hướng đối tượng là sự đa hình của mỗi hành động cụ thể ở những đối tượng khác nhau. 

> Đa hình trong lập trình thì được hiểu là Lớp Con sẽ viết lại những phương thức ở lớp cha (ovewrite).

> Các class cùng implement một interface nhưng chúng có cách thức thực hiện khác nhau cho các method của interface đó.

# static::method() với self::method()

> Static trong lập trình hướng đối tượng là một thành phần tĩnh (có thể là thuộc tính hoặc phương thức) mà nó hoạt động như một biến toàn cục, dù cho nó có được xử lý ở trong bất kỳ một file nào đi nữa (trong cùng một chương trình) thì nó đều lưu lại giá trị cuối cùng mà nó được thực hiện vào trong lớp.


