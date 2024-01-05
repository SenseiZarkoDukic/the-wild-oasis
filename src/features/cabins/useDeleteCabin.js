const { isLoading: isDeleting, mutate } = useMutation({
  mutationFn: deleteCabin,
  onSuccess: () => {
    toast.success("Cabin successfully deleted");
    queryClient.invalidateQueries({ queryKey: ["cabins"] });
  },
  onError: (err) => toast.error(err.message),
});
