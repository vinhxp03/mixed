<?php

declare(strict_types = 1);

require("./Animal.php");

class Cat extends Animal implements Walk
{
  function __construct()
  {
    print_r($this);
  }

  public function eat(): void
  {
    fwrite(STDOUT, "Cat eating\n");
  }

  public function walk(): void
  {
    fwrite(STDOUT, "Cat walking\n");
  }

  public function run(): void
  {
    fwrite(STDOUT, "Cat running\n");
  }
}

$cat = new Cat();

print_r(get_class_methods($cat));