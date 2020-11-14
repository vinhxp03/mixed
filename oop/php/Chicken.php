<?php

declare(strict_types = 1);

require("./Animal.php");

class Chicken extends Animal implements Fly, Walk
{
  public function sayHello(): void
  {
    fwrite(STDOUT, "sayHello Chicken\n");
  }

  public function eat(): void
  {
    fwrite(STDOUT, "Chicken eating\n");
  }

  public function fly(): void
  {
    fwrite(STDOUT, "Chicken flying\n");
  }

  public function jump(): void
  {
    fwrite(STDOUT, "Chicken jumpping\n");
  }

  public function run(): void
  {
    fwrite(STDOUT, "Chicken running\n");
  }

  public function walk(): void
  {
    fwrite(STDOUT, "Chicken walking\n");
  }
}

$chicken = new Chicken();

print_r(get_class_methods($chicken));

$chicken->setName("Juki");
print_r($chicken->getName());