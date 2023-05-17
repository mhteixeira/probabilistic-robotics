1. Create the folder for the project:

``` bash
mkdir -p tutorial_folder/src
```

2. Call catkin_make on that folder

``` bash
cd tutorial_folder
catkin_make
```

3. Create a package with its dependencies

``` bash
cd src
catkin_create_pkg tutorial_pkg_name roscpp rospy std_msgs geometry_msgs
```

4. Launch husky_gazebo

``` bash
roslaunch husky_gazebo husky_playpen.launch
```

5. See husky topics

``` bash
rostopic list
rostopic list | grep vel # the ones that have "vel" in the name
```

6. Inside the tutorial_pkg_name folder, create a folder named scripts and start editing the code

7. 